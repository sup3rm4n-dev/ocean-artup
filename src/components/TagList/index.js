import React from "react"

import { TagListContainer, Tag, TagIcon } from "./styles"

const TagList = ({ tags, activeTag, setTag }) => (
  <TagListContainer>
    {tags.map(({ node: { title, icon } }) => (
      <Tag
        key={title}
        active={activeTag === title}
        onClick={() => setTag(title)}
      >
        <TagIcon src={icon.file.url} alt={icon.title} />
        {title}
      </Tag>
    ))}
  </TagListContainer>
)

export default TagList
