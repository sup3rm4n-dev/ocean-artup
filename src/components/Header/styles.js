import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import mediaQuery from '../../utils/mediaQuery'

const navLinkStyle = css`
  color: inherit;
  &:hover {
    color: ${props => props.theme.mainOrange};
    text-decoration: none;
  }
  &.${props => props.activeClassName} {
    border-bottom: ${({ theme }) => theme.smallBorder + ` solid ` + theme.mainOrange};
  }
`

export const Content = styled.header`
  color: ${props => props.theme.mainWhite};
  padding: 1rem 2rem 1rem 1.25rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  ${mediaQuery.minTablet} {
    justify-content: center;
    padding: 1rem 2rem;
    grid-gap: 2rem;
  }
`

export const Logo = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 0.2rem;
  border-radius: 50%;
  background: ${props => props.theme.mainWhite};;
  overflow: hidden;
`

export const SiteTitle = styled(Link)`
  ${navLinkStyle};
  font-weight: bold;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.5rem;
`

export const Nav = styled.nav`
  display: grid;
  overflow: scroll;
  ${mediaQuery.minTablet} {
    grid-auto-flow: column;
    grid-gap: 2rem;
  }
  ${mediaQuery.tablet} {
    position: fixed;
    right: 0;
    border-left: ${({theme}) => theme.smallBorder + ' solid ' + theme.mainBlack};
    z-index: 2;
    background: ${props => props.theme.darkGray};
    padding: 2rem;
    grid-gap: 1rem;
    height: 100vh;
    min-width: 30vw;
    grid-auto-rows: max-content;
    transform: translate(${props => props.hideNav ? `100%` : `0`});
    transition: transform 0.5s ease;
  }
`

export const NavLink = styled(Link)`
  ${navLinkStyle};
`

export const ToggleNav = styled.button`
  color: inherit;
  transform: scale(1.5);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  ${mediaQuery.minTablet} {
    display: none;
  }
  ${props => props.inside && `
    position: absolute;
    right: 0.6rem;
  `}
`