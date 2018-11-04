const pageQuery = `{
  pages: allContentfulPage {
    edges {
      node {
        objectID: id
        slug
        title
        body {
          data: childMarkdownRemark {
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
  posts: allContentfulBlogPost {
    edges {
      node {
        objectID: id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        author {
          name
          email
        }
        categories {
          title
          slug
        }
        body {
          data: childMarkdownRemark {
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

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.pages.edges.map(({ node: { body, ...rest } }) => ({
        ...body.data,
        ...rest,
      })),
    indexName: `Pages`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.posts.edges.map(({ node: { body, ...rest } }) => ({
        ...body.data,
        ...rest,
      })),
    indexName: `Posts`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
