import styled from 'styled-components'
import { Link } from 'gatsby'

import { navLinkStyle } from '../Nav/styles'
import mediaQuery from '../../utils/mediaQuery'

export const Container = styled.header`
  grid-column: 1 / -1;
  grid-row: 1;
  z-index: 3;
  align-self: start;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3vw;
  align-items: center;
  padding: 1vh 3vw;
  justify-content: space-between;
  ${mediaQuery.tablet} {
    grid-template-columns: 1fr;
  }
`

export const SiteTitle = styled(Link)`
  width: 5em;
  display: inline-grid;
  ${navLinkStyle};
  grid-column: 1 / -1;
  ${mediaQuery.phablet} {
    grid-area: 1 / 1 / 1 / 1;
    justify-self: center;
  }
`
