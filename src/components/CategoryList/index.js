import React from 'react'
import PropTypes from 'prop-types'

import { CategoryContainer, List, CategoryIcon, CategoryLink } from './styles'

const Category = ({ title, slug, icon }) => (
  <CategoryLink activeClassName="active" to={`/blog/` + slug}>
    {icon && <CategoryIcon src={icon.file.url} alt={icon.title} />}
    {title}
  </CategoryLink>
)

const CategoryList = ({ title, categories }) => (
  <CategoryContainer>
    <h1>{title}</h1>
    <List>
      {categories.map(({ node }) => (
        <Category key={node.slug} {...node} />
      ))}
    </List>
  </CategoryContainer>
)

export default CategoryList

CategoryList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
      }),
    })
  ).isRequired,
}

CategoryList.defaultProps = {
  title: `Categories`,
}
