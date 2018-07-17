import React from 'react'

import { Article, Title, TitleLink, Meta, Category } from './styles'
import { DateIcon, TimeIcon } from '../Icons'

const PostExcerpt = ({ post }) => (
  <Article>
    <Title>
      <TitleLink to={'/blog/' + post.slug}>
        {post.title}
      </TitleLink>
    </Title>
    <Meta>
      <DateIcon />&ensp;{post.date}&ensp;|&ensp;<TimeIcon /> {post.body.data.timeToRead} min read
      &ensp;|&ensp;<span>{post.categories.map(category =>
        <Category>{category.title}</Category>
      )}</span>
    </Meta>
    <p dangerouslySetInnerHTML={{ __html: post.body.data.excerpt }} />
  </Article>
)

export default PostExcerpt
