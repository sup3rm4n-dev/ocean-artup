import React from 'react'

import { Article, Title, TitleLink, Meta, Categories, Category } from './styles'
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
    </Meta>
    <p dangerouslySetInnerHTML={{ __html: post.body.data.excerpt }} />
    <Categories>Categories: {post.categories.map(category =>
      <Category>{category.title}</Category>
    )}</Categories>
  </Article>
)

export default PostExcerpt
