import styled, { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const headerStyles = ({ fontSize, maxFontSize }) => css`
  color: ${props => props.theme.mainWhite};
  font-size: ${fontSize};
  max-width: 80vw;
  margin: 2rem auto;
  ${mediaQuery.minLaptop} {
    font-size: ${maxFontSize};
  }
`

export const Container = styled.header`
  text-align: center;
  margin: 10vh 0;
`

export const Title = styled.h1`
  ${headerStyles({ fontSize: `10vw`, maxFontSize: `6rem` })};
`

export const Subtitle = styled.h2`
  ${headerStyles({ fontSize: `5vw`, maxFontSize: `3rem` })};
`