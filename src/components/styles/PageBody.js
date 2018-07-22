import styled from 'styled-components'

import Team from './Team'
import ImageRow from './ImageRow'
import mediaQuery from '../../utils/mediaQuery'

export const PageBody = styled.article`
  background: ${props => props.theme.mainWhite};
  padding: 10vw;
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
  ${Team}
  ${ImageRow}
`

export default PageBody