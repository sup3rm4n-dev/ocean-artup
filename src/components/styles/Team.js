import { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Team = css`
  team {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(auto, 10rem));
    justify-content: center;
    max-width: calc(${props => props.theme.maxWidth} + 10rem);

    p:first-child, h1, h2, h3, h4, h5, h6 {
      grid-column: 1/-1;
      max-width: 100%;
      text-align: center;
    }
    h1, h2, h3, h4, h5, h6 {
      white-space: nowrap;
      font-size: 2rem;
      ${mediaQuery.minPhone} {
        font-size: 2.5rem;
      }
      ${mediaQuery.minPhablet} {
        font-size: 3rem;
      }
    }

    p {
      text-align: center;
      margin: 0;
      img {
        margin: 0;
        border-radius: 50%;
        width: 100%;
        max-width: 10rem;
      }
      em {
        white-space: nowrap;
        display: block;
        font-style: normal;
        font-weight: bold;
      }
      strong {
        display: block;
        font-weight: lighter;
      }
    }
  }
`

export default Team