import styled, { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const inTitle = css`
  justify-items: center;
  padding: 0.2em 1em;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${props => props.theme.mediumBorderRadius};
  a {
    color: ${props => props.theme.lightBlue};
  }
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.3em 0;
  font-size: 0.9em;
  > span {
    display: flex;
    align-items: center;
    margin-right: 1em;
  }
  ${mediaQuery.minPhone} {
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
