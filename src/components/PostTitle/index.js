import React from 'react'

import { Container, Title, Meta, BackLink } from './styles'
import { DateIcon, TimeIcon } from '../Icons'

const PostTitle = props => (
  <Container>
    <Title>{props.title}</Title>
    <Meta>
      <DateIcon />&ensp;{props.date}&ensp;|&ensp;<TimeIcon /> {props.timeToRead} min read
    </Meta>
    <BackLink to='/blog'>Back to blog</BackLink>
  </Container>
)

export default PostTitle
