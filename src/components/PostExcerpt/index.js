import React from 'react'

import { Article, Title, TitleLink } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({ post, post: { title, slug, body } }) => (
  <Article>
    <Title>
      <TitleLink to={'/blog/' + slug}>
        {title}
      </TitleLink>
    </Title>
    <PostMeta {...post} />
    <p dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
  </Article>
)

export default PostExcerpt
