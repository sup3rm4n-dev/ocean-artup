import React from 'react'

import { Container, Title, Subtitle } from './styles'

const PageTitle = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Container>
)

export default PageTitle
