import styled, { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const inTitle = css`
  justify-items: center;
  padding: 0.2em 1em;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${props => props.theme.mediumBorderRadius};
  margin: 5em 0;
  a {
    color: ${props => props.theme.lightGreen};
  }
`

export const Meta = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-gap: calc(0.5em + 1vw);
  margin: 1.3em 0;
  font-size: 0.9em;
  > span {
    display: flex;
    align-items: center;
  }
  ${mediaQuery.minPhone} {
    grid-auto-flow: column;
    > :not(:first-child) {
      padding-left: 0.7em;
      border-left: ${props => props.theme.smallBorder} solid;
    }
  }
  ${props => props.inTitle && inTitle};
`

export const AuthorPhoto = styled.img`
  width: 2em !important;
  border-radius: 50%;
  margin-left: 0.5em;
`
