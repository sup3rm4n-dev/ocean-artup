import styled from 'styled-components'

import mediaQuery from '../utils/mediaQuery'

export const PageBody = styled.article`
  text-align: center;
  color: ${props => props.theme.mainWhite};
  * {
    margin: 0 auto;
  }
  img {
    height: 100%;
    width: 100%;
  }

  .about {
    background: ${props => props.theme.lightGreen};
    padding: 3rem;
    p {
      max-width: ${props => props.theme.maxWidth};
    }
  }

  .text-with-image {
    img {
      height: 100%;
      object-fit: cover;
    }
    a {
      color: ${props => props.theme.mainOrange};
    }
    > p {
      margin: 0;
    }
    background: ${props => props.theme.darkGray};
    .text {
      margin: auto;
      padding: 3rem;
      p {
        max-width: ${props => props.theme.maxWidth};
        margin-top: 1.5rem;
      }
      ${mediaQuery.phone} {
        padding: 2rem 1rem;
      }
    }
    ${mediaQuery.minTablet} {
      display: flex;
      text-align: left;
      max-height: 25rem;
      .text {
        margin-left: 0;
        max-width: ${props => props.theme.medWidth};
      }
      img {
        max-width: 40vw;
      }
      &:nth-child(2n+1) {
        text-align: right;
        flex-direction: row-reverse;
        background: ${props => props.theme.mainGray};
        .text {
          margin-right: 0;
        }
      }
    }
  }

  .participants {
    padding: 2rem;
    background: ${props => props.theme.mainWhite};
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    h1, h2, h3, h4 {
      margin-top: 2rem;
      width: 100%;
      padding: 0.5rem 2rem;
      background: ${props => props.theme.lightGreen};
      border-radius: ${props => props.theme.largeBorderRadius};
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
      grid-template-columns: repeat(3, minmax(auto, 20rem));
      h1, h2, h3, h4 {
        white-space: nowrap;
        grid-row: 1;
        grid-column: auto;
      }
    }
  }
`

export default PageBody