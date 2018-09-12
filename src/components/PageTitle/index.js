import React from 'react'

import { Container } from './styles'

const PageTitle = ({ title, subtitle }) => (
  <Container>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </Container>
)

export default PageTitle
