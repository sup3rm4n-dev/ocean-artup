import styled from 'styled-components'

import About from './About'
import Spotlight from './Spotlight'
import Participants from './Participants'

export const PageBody = styled.article`
  text-align: center;
  color: ${props => props.theme.mainWhite};
  * {
    margin: 0 auto;
  }

  ${About}
  ${Spotlight}
  ${Participants}
`

export default PageBody