import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Article, Title, Excerpt } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({
  post,
  post: { title, slug, body, featuredImage: featImg },
}) => (
  <Article>
    {featImg && (
      <Link to={'/blog/' + slug}>
        <Img fluid={featImg.fluid} alt={featImg.title} />
      </Link>
    )}
    <div>
      <Link to={'/blog/' + slug}>
        <Title>{title}</Title>
      </Link>
      <PostMeta {...post} />
      <Excerpt dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
    </div>
  </Article>
)

export default PostExcerpt
