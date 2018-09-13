import React from 'react'

import { Container, SiteTitle } from './styles'
import Nav from '../Nav'
import Logo from '../../assets/logo'

const Header = ({ site }) => (
  <Container>
    <SiteTitle to="/" title={site.title} rel="home">
      <Logo />
    </SiteTitle>
    <Nav />
  </Container>
)

export default Header
