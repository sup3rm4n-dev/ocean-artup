import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Spotlight = styled.section`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    color: ${props => props.theme.mainOrange};
    :hover {
      color: ${props => props.theme.mainYellow} !important;
    }
  }
  > p {
    margin: 0;
  }
  background: ${props => props.theme.darkGray};
  .text {
    padding: 3vh 3vw;
    p {
      max-width: 25em;
      margin: auto;
    }
  }
  ${mediaQuery.minTablet} {
    display: flex;
    text-align: left;
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
