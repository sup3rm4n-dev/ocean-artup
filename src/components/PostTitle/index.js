import React from 'react'

import { Container, Title, BackLink } from './styles'
import PostMeta from '../PostMeta'

const PostTitle = ({ post }) => (
  <Container>
    <Title>{post.title}</Title>
    <PostMeta inTitle {...post} />
    <BackLink to='/blog'>Back to blog</BackLink>
  </Container>
)

export default PostTitle
