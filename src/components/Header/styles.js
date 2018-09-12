import styled from 'styled-components'
import { Link } from 'gatsby'

import LogoComp from '../../assets/logo'
import { navLinkStyle } from '../Nav/styles'

export const Container = styled.div`
  grid-column: 1 / -1 !important;
  grid-row: 1;
  z-index: 2;
  align-self: start;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5vmin;
  align-items: center;
  padding: 2vmin 3vmin;
  justify-content: center;
`

export const SiteTitle = styled(Link)`
  ${navLinkStyle};
`

export const Logo = styled(LogoComp)`
  width: 5em;
`
