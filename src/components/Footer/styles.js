import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

export const Container = styled.footer`
  background-color: ${props => props.theme.darkGray};
  padding: 1rem 2rem;
  color: ${props => props.theme.mainWhite};
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  font-weight: lighter !important;
  a {
    color: ${props => props.theme.mainOrange}
  }
  ${mediaQuery.minTablet} {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`

export const FooterNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
`