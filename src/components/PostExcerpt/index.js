import React from 'react'

import { Article, Title, TitleLink, Meta, Category, AuthorPhoto } from './styles'
import { DateIcon, TimeIcon, CreateIcon } from '../Icons'

const PostExcerpt = ({ post: { title, slug, author, date, categories, body } }) => (
  <Article>
    <Title>
      <TitleLink to={'/blog/' + slug}>
        {title}
      </TitleLink>
    </Title>
    <Meta>
      <CreateIcon />
      &nbsp;<a href={`mailto:${author.email}`}>{author.name}</a>
      <AuthorPhoto src={author.photo.file.url} />
      &ensp;|&ensp;
      <DateIcon />
      &ensp;{date}
      &ensp;|&ensp;
      <TimeIcon />
      &ensp;{body.data.timeToRead} min read
      &ensp;|&ensp;
      <span>{categories.map(category =>
        <Category>{category.title}</Category>
      )}</span>
    </Meta>
    <p dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
  </Article>
)

export default PostExcerpt
