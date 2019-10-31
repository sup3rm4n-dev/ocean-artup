const pageQuery = `{
  pages: allContentfulPage {
    edges {
      node {
        objectID: id
        slug
        title
        body {
          remark: childMarkdownRemark {
            excerpt(pruneLength: 5000)
            headings {
              value
              depth
            }
          }
        }
      }
    }
  }
}`

const postQuery = `{
  posts: allContentfulPost {
    edges {
      node {
        objectID: id
        slug
        title
        date(formatString: "MMM DD, YYYY")
        author {
          name
          email
        }
        tags {
          title
          slug
        }
        body {
          remark: childMarkdownRemark {
            excerpt(pruneLength: 5000)
            headings {
              value
              depth
            }
          }
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { body, ...rest } }) => ({
    ...body.remark,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    indexName: `Pages`,
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    settings,
  },
  {
    indexName: `Posts`,
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    settings,
  },
]

module.exports = queries
