import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PostList from '../components/PostList'
import CategoryList from '../components/CategoryList'

const CategoryTemplate = ({ data, location }) => {
  const { activeCategory, categories } = data
  let { posts } = data
  const title = `Blog`
  const { text } = activeCategory.description
  const path = location.pathname
  if (activeCategory.slug !== `/`) {
    posts.edges = posts.edges.filter(({ node }) =>
      node.categories
        .map(category => category.slug)
        .includes(activeCategory.slug)
    )
  }
  return (
    <Global pageTitle={title} path={path} description={text}>
      <PageTitle title={title} />
      <CategoryList categories={categories.edges} />
      {posts && <PostList posts={posts.edges} />}
    </Global>
  )
}

export default CategoryTemplate

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
  query($slug: String!) {
    posts: allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
    ...categories
    activeCategory: contentfulBlogCategory(slug: { eq: $slug }) {
      title
      slug
      description {
        text: description
      }
    }
  }
`
