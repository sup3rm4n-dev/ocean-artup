import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PostTitle from '../components/PostTitle'
import PageBody from '../components/PageBody'

const PostTemplate = ({ data, location }) => {
  const { post, site } = data
  const { title, date, body } = post
  const { timeToRead, html, excerpt } = body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PostTitle title={title} date={date} timeToRead={timeToRead} />
      <PageBody dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  fragment postFields on ContentfulBlogPost {
    slug
    title
    author {
      name
      email
      photo {
        file {
          url
        }
      }
    }
    categories: category {
      title
    }
    date(formatString: "MMMM DD, YYYY")
    body {
      data: childMarkdownRemark {
        html
        timeToRead
        excerpt(pruneLength: 250)
      }
    }
  }
  query($slug: String!) {
    ...siteMetaQuery
    post: contentfulBlogPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`