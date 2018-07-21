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
  padding: 1rem 2rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  ${mediaQuery.minLaptop} {
    justify-content: center;
    padding: 1rem 2rem;
    grid-gap: 3rem;
  }
`

export const SiteTitle = styled(Link)`
  ${navLinkStyle};
`

export const Logo = styled.img`
  width: 6rem;
  margin: 0;
`

export const Nav = styled.nav`
  display: grid;
  overflow: scroll;
  ${mediaQuery.minLaptop} {
    grid-auto-flow: column;
    grid-gap: 2rem;
  }
  ${mediaQuery.laptop} {
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
  transform: scale(2);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  ${mediaQuery.minLaptop} {
    display: none;
  }
  ${props => props.inside && `
    position: absolute;
    top: 0.7rem;
    right: 1.3rem;
  `}
`