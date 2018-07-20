import styled from 'styled-components'
import { Link } from 'gatsby'

export const CategoryIcon = styled.img`
  height: 1.75rem;
  width: 1.75rem;
  margin: 0 0.4rem 0 0;
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0.2rem;
`

export const CategoryLink = styled(Link)`
  display: flex;
  padding: 0 0.5rem;
  color: ${props => props.theme.darkGray} !important;
  background: ${props => props.theme.lightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  &.${props => props.activeClassName} {
    background: ${props => props.theme.mainOrange};
  }
`

export const List = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 1rem;
  margin-bottom: 3rem;
`

export const ListTitle = styled.h1`
  margin: 0;
  margin-right: 1rem;
`