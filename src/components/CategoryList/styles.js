import styled from 'styled-components'
import { Link } from 'gatsby'

import mediaQuery from '../../utils/mediaQuery'

export const Container = styled.div`
  grid-column: 2 / -2;
  text-align: center;
  margin-top: 1em;
`

export const CategoryIcon = styled.img`
  height: 1.75em;
  width: 1.75em;
  min-width: 1.75em;
  margin-right: 0.7em;
  background: ${props => props.theme.lightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0.2em;
`

export const CategoryLink = styled(Link)`
  display: flex;
  align-items: center;
  &.${props => props.activeClassName} {
    color: ${props => props.theme.mainOrange};
  }
`

export const List = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  justify-content: center;
  ${mediaQuery.minPhablet} {
    grid-auto-flow: column;
    grid-template-columns: initial;
  }
`
