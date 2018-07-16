import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = props => (
  props.to.startsWith('/')
    ? <GatsbyLink {...props}>{props.children}</GatsbyLink>
    : <a {...props} href={props.to}>{props.children}</a>
)

export default Link