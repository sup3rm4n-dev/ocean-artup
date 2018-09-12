import styled, { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const headerTitleStyles = ({ fontSize, maxFontSize }) => css`
  color: ${props => props.theme.mainWhite};
  max-width: 80vw;
  margin: 2rem auto;
  ${mediaQuery.phone} {
    font-size: ${fontSize};
  }
  ${mediaQuery.minLaptop} {
    font-size: ${maxFontSize};
  }
`

export const Container = styled.header`
  z-index: 2;
  grid-column: 1 / -1;
  grid-row: 2;
  text-align: center;
  margin: 8vh 0 14vh;
  ${mediaQuery.minLaptop} {
    margin: 10vh 0 16vh;
  }
`

export const Title = styled.h1`
  ${headerTitleStyles({ fontSize: `10vw`, maxFontSize: `4.5rem` })};
  margin-bottom: 4rem;
`

export const Subtitle = styled.h2`
  ${headerTitleStyles({ fontSize: `4vw`, maxFontSize: `2rem` })};
`
