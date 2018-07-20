import { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Participants = css`
  participants {
    padding: 2rem;
    background: ${props => props.theme.mainWhite};
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    h1, h2, h3, h4 {
      width: 100%;
      padding: 0.5rem 2rem;
      background: ${props => props.theme.lightGreen};
      border-radius: ${props => props.theme.largeBorderRadius};
    }
      p:first-child {
        grid-column: 1/-1;
        img {
          max-width: 15rem;
        }
      }
    img {
      width: 100%;
      max-height: 10rem;
    }
    ${mediaQuery.phone} {
      h1, h2, h3, h4 {
        font-size: 1rem;
      }
    }
    ${mediaQuery.tablet} {
      grid-gap: 1rem;
      grid-auto-rows: minmax(2rem, 5rem);
      h1, h2, h3, h4 {
        grid-column: 1/-1;
      }
    }
    ${mediaQuery.minPhablet} {
      grid-template-columns: auto auto;
    }
    ${mediaQuery.minTablet} {
      grid-template-columns: repeat(3, minmax(10rem, 15rem));
      grid-template-rows: repeat(4, auto);
      grid-auto-flow: column;
      h1, h2, h3, h4 {
        white-space: nowrap;
        grid-row: 2;
      }
    }
  }
`

export default Participants