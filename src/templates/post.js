import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PostTitle from '../components/PostTitle'
import PageBody from '../components/PageBody'

const PostTemplate = ({ data: { post }, location }) => {
  const { title, body } = post
  const { htmlAst, excerpt } = body.data
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PostTitle post={post} />
      <PageBody htmlAst={htmlAst} />
    </Global>
  )
}

export default PostTemplate

export const query = graphql`
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
    categories {
      title
      slug
    }
    date(formatString: "MMMM DD, YYYY")
    body {
      data: childMarkdownRemark {
        htmlAst
        timeToRead
        excerpt(pruneLength: 250)
      }
    }
  }
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`
