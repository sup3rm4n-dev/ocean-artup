import React, { Fragment } from 'react'

import { List, CategoryIcon, CategoryLink } from './styles'

const Category = ({ category }) => {
  const { title, slug, icon } = category
  const link = `/blog` + (slug ? `/` + slug : ``)
  return <CategoryLink exact activeClassName='active' to={link} >
    {icon && <CategoryIcon src={icon.file.url} alt={icon.title} />}
    {title}
  </CategoryLink>
}

const CategoryList = ({ title, categories }) => (
  <Fragment>
    <h1>{title}</h1>
    <List>
      <Category category={{ title: `All` }} />
      {categories.map(({ node: category }) =>
        <Category key={category.slug} category={category} />
      )}
    </List>
  </Fragment>
)

export default CategoryList