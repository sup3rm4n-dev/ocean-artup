import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import CategoryList from '../components/CategoryList'
import PostsList from '../components/PostsList'

const blogCategoryTemplate = ({ data, location }) => {
  const { activeCategory, site, posts, categories } = data
  const title = `Blog`
  const { text } = activeCategory.description
  const path = location.pathname
  return <Layout>
    <Helmet pageTitle={title} site={site} path={path} description={text} />
    <PageTitle title={title} />
    <PageBody>
      <CategoryList
        title="Categories"
        categories={categories.edges}
      />
      {posts && <PostsList posts={posts.edges} />}
    </PageBody>
  </Layout>
}

export default blogCategoryTemplate

export const blogCategoryQuery = graphql`
  query($slug: String!) {
    ...siteMetaQuery
    posts: allContentfulBlogPost(
      sort: { fields: [ date ], order: DESC }
      filter: { category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
    ...categories
    activeCategory: contentfulBlogCategory(slug: {eq: $slug}) {
      title
      slug
      description {
        text: description
      }
    }
  }
`
