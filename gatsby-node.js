const path = require('path')

const pageTemplate = path.resolve('./src/templates/page.js')
const postTemplate = path.resolve('./src/templates/post.js')
const blogCategoryTemplate = path.resolve('./src/templates/blogCategory.js')

const contentfulQuery = contentType => `
  {
    content: allContentful${contentType} {
      edges {
        node {
          slug
        }
      }
    }
  }
`

const pageSets = [
  {
    query: contentfulQuery(`Page`),
    component: pageTemplate,
  },
  {
    query: contentfulQuery(`BlogPost`),
    component: postTemplate,
    pathPrefix: `blog/`,
  },
  {
    query: contentfulQuery(`BlogCategory`),
    component: blogCategoryTemplate,
    pathPrefix: `blog/`,
  },
]

exports.createPages = ({ graphql, actions: { createPage } }) => {
  pageSets.forEach(async ({ query, component, pathPrefix = `` }) => {
    const response = await graphql(query)
    if (response.errors) {
      console.error(response.errors)
      throw new Error(response.errors)
    }
    response.data.content.edges.forEach(({ node: { slug } }) => {
      if (![`contact`].includes(slug)) {
        createPage({
          path: pathPrefix + slug,
          component,
          context: { slug },
        })
      }
    })
  })
}
