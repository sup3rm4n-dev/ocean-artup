import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import CategoryList from '../components/CategoryList'
import PostExcerpt from '../components/PostExcerpt'

const CategoryTemplate = ({ data, location }) => {
  const { activeCategory, posts, categories } = data
  const title = `Blog`
  const { text } = activeCategory.description
  const path = location.pathname
  return (
    <Global pageTitle={title} path={path} description={text}>
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

export default CategoryTemplate

export const query = graphql`
  query($slug: String!) {
    posts: allContentfulBlogPost(
      sort: { fields: [date], order: DESC }
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
