import React, { useState } from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import PostList from "../components/PostList"
import TagList from "../components/TagList"

const Blog = ({ data, location, title = `Blog` }) => {
  const { posts, tags } = data
  const [tag, setTag] = useState(`All`)
  const filteredPosts =
    tag === `All`
      ? posts.edges
      : posts.edges.filter(({ node }) =>
        node.tags.map(tag => tag.title).includes(tag)
      )
  if (!tags.edges.map(({ node }) => node.title).includes(`All`))
    tags.edges.unshift({ title: `All`, count: posts.edges.length })
  return (
    <Global pageTitle={title} path={location.pathname}>
      <PageTitle title={title} />
      <TagList tags={tags.edges} activeTag={tag} setTag={setTag} />
      <PostList posts={filteredPosts} />
    </Global>
  )
}

export default Blog

export const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
    tags: allContentfulBlogTag(sort: { fields: [title], order: ASC }) {
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
`
