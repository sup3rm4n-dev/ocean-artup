import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Team = styled.div`
  display: grid;
  grid-gap: calc(0.5em + 4vmin);
  grid-template-columns: repeat(auto-fit, minmax(auto, 10rem));
  justify-content: center;
  max-width: ${props => props.theme.maxWidth};

  p:first-child,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    grid-column: 1/-1;
    max-width: 100%;
    text-align: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    white-space: nowrap;
    font-size: 2rem;
    ${mediaQuery.minPhone} {
      font-size: 2.5rem;
    }
    ${mediaQuery.minPhablet} {
      font-size: 3rem;
    }
  }
  .gatsby-resp-image-wrapper {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
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
      display: block;
      font-style: normal;
      font-weight: bold;
    }
    strong {
      display: block;
      font-weight: lighter;
    }
  }
`

export default Team
