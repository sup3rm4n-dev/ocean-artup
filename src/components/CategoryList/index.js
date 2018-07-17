import React from 'react'

import { List, ListTitle, CategoryIcon, CategoryLink } from './styles'

const Category = ({ category }) => {
  const { title, slug, icon } = category
  const link = `/blog` + (slug ? `/` + slug : ``)
  return <CategoryLink exact activeClassName to={link} >
    {icon && <CategoryIcon src={icon.file.url} alt={icon.title} />}
    {title}
  </CategoryLink>
}

const CategoryList = ({ title, categories }) => (
  <List>
    <ListTitle>{title}</ListTitle>
    <Category category={{ title: `All` }} />
    {categories.map(({ node: category }) =>
      <Category key={category.slug} category={category} />
    )}
  </List>
)

export default CategoryList