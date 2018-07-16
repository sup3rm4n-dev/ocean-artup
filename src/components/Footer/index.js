import React from 'react'
import { Link } from 'gatsby'

import {
  Container,
  FooterNav
} from './styles'

const Footer = ({
  footer: { copyright, links, authorsNote }
}) => (
  <Container>
      <FooterNav>
        {links.map(link =>
          <Link key={link.url} to={link.url}>
            {link.title}
          </Link>
        )}
      </FooterNav>
      <span>© {new Date().getFullYear()} - {copyright}</span>
      <span dangerouslySetInnerHTML={{__html: authorsNote}} />
  </Container>
)

export default Footer