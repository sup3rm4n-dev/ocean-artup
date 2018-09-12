import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Page = styled.article`
  grid-column: 3;
  background: ${props => props.theme.mainWhite};
  ${mediaQuery.minPhablet} {
    text-align: justify;
  }
  > * {
    max-width: ${props => props.theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
  a {
    color: ${props => props.theme.mainBlue};
    :hover {
      color: ${props => props.theme.mainOrange};
    }
  }
  img {
    width: 100%;
  }
  .caption {
    display: block;
    font-size: 0.9rem;
    text-align: center;
    font-style: italic;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }
`

export default Page
