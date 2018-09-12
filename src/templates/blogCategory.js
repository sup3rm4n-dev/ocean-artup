import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
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
    <Layout pageTitle={title} path={path} description={text}>
      <PageTitle title={title} />
      <PageBody>
        <CategoryList title="Categories" categories={categories.edges} />
        {posts &&
          posts.edges.map(({ node }) => (
            <PostExcerpt key={node.slug} post={node} />
          ))}
      </PageBody>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query($slug: String!) {
    posts: allContentfulBlogPost(
      sort: { fields: [date], order: DESC }
      filter: { categories: { slug: { eq: $slug } } }
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
