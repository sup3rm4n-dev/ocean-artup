import React from 'react'

import { Container, SiteTitle } from './styles'
import Nav from '../Nav'
import Search from '../Search'
import Logo from '../../assets/logo'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site }) => (
  <Container>
    <SiteTitle to="/" title={site.title} rel="home">
      <Logo />
    </SiteTitle>
    <Nav />
    <Search collapse indices={searchIndices} />
  </Container>
)

export default Header
