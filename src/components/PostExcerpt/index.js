import React from 'react'

import { Article, Title } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({ post, post: { title, slug, body } }) => (
  <Article>
    <Title to={'/blog/' + slug}>{title}</Title>
    <PostMeta {...post} />
    <p dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
  </Article>
)

export default PostExcerpt
