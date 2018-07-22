import React, { Fragment } from 'react'

import { Meta, Categories, Category, AuthorPhoto } from './styles'
import { DateIcon, TimeIcon, CreateIcon } from '../styles/Icons'

const PostMeta = ({ author, date, categories, body, inTitle }) => (
  <Fragment>
    <Meta inTitle={inTitle} >
      <span>
        <CreateIcon />
        &nbsp;
        <a href={`mailto:${author.email}`}>{author.name}</a>
        <AuthorPhoto src={author.photo.file.url} />
      </span>
      <span>
        <DateIcon />
        &ensp;{date}
      </span>
      <span>
        <TimeIcon />
        &ensp;{body.data.timeToRead} min read
      </span>
    </Meta>
    <Categories>{categories.map(category =>
      <Category key={category.slug}>{category.title}</Category>
    )}</Categories>
  </Fragment>
)

export default PostMeta
