import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import mediaQuery from '../../utils/mediaQuery'

export const navLinkStyle = css`
  color: ${props => props.theme.mainWhite};
  transition: ${props => props.theme.shortTrans};
  :hover {
    color: ${props => props.theme.mainOrange};
  }
  &.${props => props.activeClassName} {
    border-bottom: ${({ theme }) =>
      theme.smallBorder + ` solid ` + theme.mainWhite};
    :hover {
      border-bottom: ${({ theme }) =>
        theme.smallBorder + ` solid ` + theme.mainOrange};
    }
  }
`

export const Container = styled.nav`
  display: grid;
  grid-gap: 2vw;
  grid-auto-columns: max-content;
  ${mediaQuery.netbook} {
    position: fixed;
    right: 100%;
    z-index: 2;
    background: ${props => props.theme.darkGray};
    padding: 5vh;
    grid-gap: 1em;
    height: 100vh;
    min-width: 15vw;
    grid-auto-rows: max-content;
    transform: translate(${props => (props.showNav ? `99%` : `0`)});
    transition: ${props => props.theme.mediumTrans};
  }
  ${mediaQuery.minNetbook} {
    grid-auto-flow: column;
  }
`

export const NavLink = styled(Link)`
  ${navLinkStyle};
`

export const Toggle = styled.div`
  font-size: 1.8em;
  cursor: pointer;
  ${mediaQuery.minNetbook} {
    display: none;
  }
  ${props =>
    props.inside &&
    `
    position: absolute;
    top: 0.3em;
    right: 0.5em;
  `};
  ${navLinkStyle};
`
