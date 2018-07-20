import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/styles/PageBody'
import CategoryList from '../components/CategoryList'
import PostsList from '../components/PostsList'

const Blog = ({ data, location }) => {
  const title = `Blog`
  const { posts, categories } = data
  const path = location.pathname
  return <Layout>
    <Helmet pageTitle={title} site={data.site} path={path} />
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

export default Blog

export const blogIndexQuery = graphql`
  fragment categories on RootQueryType {
    categories: allContentfulBlogCategory(
      sort: { fields: [title], order: ASC}
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
    ...siteMetaQuery
    posts: allContentfulBlogPost(
      sort: { fields: [ date ], order: DESC }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
    ...categories
  }
`
