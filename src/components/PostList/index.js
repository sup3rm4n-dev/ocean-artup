import React from 'react'

import PostExcerpt from '../PostExcerpt'
import { Container } from './styles'

const PostList = ({ posts }) => (
  <Container>
    {posts.map(({ node }) => (
      <PostExcerpt key={node.slug} post={node} />
    ))}
  </Container>
)

export default PostList
