import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

export const Container = styled.footer`
  background-color: ${props => props.theme.darkGray};
  padding: 3rem;
  color: ${props => props.theme.mainWhite};
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  a {
    color: ${props => props.theme.mainOrange}
  }
  ${mediaQuery.minTablet} {
    grid-auto-flow: column;
    grid-gap: 2rem;
    justify-content: center;
  }
`