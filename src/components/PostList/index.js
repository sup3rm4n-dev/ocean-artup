import React from 'react'

import { Container } from './styles'
import PostExcerpt from '../PostExcerpt'

const PostList = ({ posts, categories }) => (
  <Container>
    {posts.map(({ node }) => (
      <PostExcerpt key={node.slug} post={node} />
    ))}
  </Container>
)

export default PostList
