import React from 'react'

import { Container } from './styles'

const Footer = ({
  footer: { copyright, authorsNote }
}) => (
  <Container>
      <span>© {new Date().getFullYear()} - {copyright}</span>
      <span dangerouslySetInnerHTML={{__html: authorsNote}} />
  </Container>
)

export default Footer