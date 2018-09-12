import React from 'react'

import { Container, Logo, SiteTitle } from './styles'
import Nav from '../Nav'

const Header = ({ site }) => (
  <Container>
    <SiteTitle to="/" title={site.title} rel="home">
      <Logo />
    </SiteTitle>
    <Nav />
  </Container>
)

export default Header
