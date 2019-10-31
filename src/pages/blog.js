import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import CategoryList from '../components/CategoryList'
import PostExcerpt from '../components/PostExcerpt'

const Blog = ({ data, location }) => {
  const title = `Blog`
  const { posts, categories } = data
  return (
    <Global pageTitle={title} path={location.pathname}>
      <PageTitle title={title} />
      <CategoryList categories={categories.edges} />
      <PageBody>
        {posts &&
          posts.edges.map(({ node }) => (
            <PostExcerpt key={node.slug} post={node} />
          ))}
      </PageBody>
    </Global>
  )
}

export default Blog

export const query = graphql`
  fragment categories on Query {
    categories: allContentfulBlogCategory(
      sort: { fields: [title], order: ASC }
    ) {
      edges {
        node {
          title
          slug
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
  {
    posts: allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
    ...categories
  }
`
