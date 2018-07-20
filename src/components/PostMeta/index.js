import React from 'react'

import { Meta, Category, AuthorPhoto } from './styles'
import { DateIcon, TimeIcon, CreateIcon } from '../styles/Icons'

const PostMeta = ({ author, date, categories, body, inTitle }) => (
  <Meta inTitle={inTitle} >
    <span>
      <CreateIcon />
      &nbsp;
      <a href={`mailto:${author.email}`}>{author.name}</a>
      <AuthorPhoto src={author.photo.file.url} />
    </span>
    &ensp;|&ensp;
    <span>
      <DateIcon />
      &ensp;{date}
    </span>
    &ensp;|&ensp;
    <span>
      <TimeIcon />
      &ensp;{body.data.timeToRead} min read
    </span>
    &ensp;|&ensp;
    <span>{categories.map(category =>
      <Category key={category.slug}>{category.title}</Category>
    )}</span>
  </Meta>
)

export default PostMeta
