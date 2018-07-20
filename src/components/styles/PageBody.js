import styled from 'styled-components'

import Team from './Team'
import ImageRow from './ImageRow'

export const PageBody = styled.article`
  background: ${props => props.theme.mainWhite};
  padding: 10vw;
  a {
    color: ${props => props.theme.mainBlue};
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