import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Spotlight = styled.section`
  display: block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    color: ${props => props.theme.mainOrange};
    :hover {
      color: darkorange;
    }
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
      max-width: ${props => props.theme.maxWidth};
    }
    img {
      width: 45vw;
    }
    &:nth-child(2n + 1) {
      text-align: right;
      flex-direction: row-reverse;
      background: ${props => props.theme.mainGray};
      .text {
        margin-right: 0;
      }
    }
  }
`

export default Spotlight
