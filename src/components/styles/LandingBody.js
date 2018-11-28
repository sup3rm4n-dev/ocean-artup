import styled from 'styled-components'

import about from './about'
import spotlight from './spotlight'
import participants from './participants'
import partners from './partners'

const LandingBody = styled.article`
  grid-column: 1 / -1;
  text-align: center;
  color: ${props => props.theme.mainWhite};
  ${about};
  ${spotlight};
  ${participants};
  ${partners};
`

export default LandingBody
