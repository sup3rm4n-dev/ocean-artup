import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { UserEdit } from 'styled-icons/fa-solid/UserEdit'
import { Calendar as Date } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'

import { Meta, AuthorPhoto } from './styles'

const PostMeta = ({ author, date, categories, body, inTitle, iconSize }) => (
  <Fragment>
    <Meta inTitle={inTitle}>
      <span>
        <UserEdit size={iconSize} />
        &nbsp;
        <a href={`mailto:${author.email}`}>{author.name}</a>
        <AuthorPhoto src={author.photo.file.url} />
      </span>
      <span>
        <Date size={iconSize} />
        &ensp;
        {date}
      </span>
      <span>
        <Timer size={iconSize} />
        &ensp;
        {body.data.timeToRead} min read
      </span>
    </Meta>
    {!inTitle && (
      <div>
        <span>Categories: </span>
        {categories.map((category, index) => (
          <Fragment>
            {!!index && ', '}
            <Link key={category.slug} to={`blog/` + category.slug}>
              {category.title}
            </Link>
          </Fragment>
        ))}
      </div>
    )}
  </Fragment>
)

export default PostMeta

PostMeta.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  body: PropTypes.object.isRequired,
}

PostMeta.defaultProps = {
  iconSize: '1.4em',
}
