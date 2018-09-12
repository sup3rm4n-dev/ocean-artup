import React from 'react'

import { Container } from './styles'
import PostMeta from '../PostMeta'

const PostTitle = ({ post }) => (
  <Container>
    <h1>{post.title}</h1>
    <PostMeta inTitle {...post} />
  </Container>
)

export default PostTitle
