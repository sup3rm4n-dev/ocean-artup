import React from 'react'
import Img from 'gatsby-image'

import { Article, Title, Excerpt } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({
  post,
  post: { title, slug, body, featuredImage: featImg },
}) => (
  <Article>
    {featImg && <Img fluid={featImg.fluid} alt={featImg.title} />}
    <div>
      <Title to={'/blog/' + slug}>{title}</Title>
      <PostMeta {...post} />
      <Excerpt dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
    </div>
  </Article>
)

export default PostExcerpt
