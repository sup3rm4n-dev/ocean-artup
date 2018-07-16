import styled from 'styled-components'

import mediaQuery from '../utils/mediaQuery'

export const PageBody = styled.article`
  text-align: center;
  color: ${props => props.theme.mainWhite};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  * {
    margin: 0 auto;
  }
  .about {
    background: ${props => props.theme.lightGreen};
    padding: 3rem;
    p {
      max-width: ${props => props.theme.maxWidth};
    }
  }
  .text-with-image {
    a {
      color: ${props => props.theme.mainOrange};
    }
    background: ${props => props.theme.darkGray};
    .text {
      padding: 3rem;
      p {
        max-width: ${props => props.theme.maxWidth};
      }
      h1, h2, h3, h4 {
        margin-bottom: 1.5rem;
      }
    }
    ${mediaQuery.minTablet} {
      display: flex;
      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }
  }
  .participants {
    padding: 3rem;
    background: ${props => props.theme.mainWhite};
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, 10rem);
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
`

export default PageBody