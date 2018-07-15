import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  FooterNav
} from './styles'

const Footer = ({
  footer: { copyright, links, authorsNote }
}) => (
  <Container>
      <span>© {new Date().getFullYear()} - {copyright}</span>
      <FooterNav>
        {links.map(link =>
          <Link key={link.url} to={link.url}>
            {link.title}
          </Link>
        )}
      </FooterNav>
      <span dangerouslySetInnerHTML={{__html: authorsNote}} />
  </Container>
)

export default Footer