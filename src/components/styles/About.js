import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const About = styled.section`
  display: block;
  background: ${props => props.theme.lightGreen};
  padding: 3rem;
  p {
    max-width: ${props => props.theme.maxWidth};
  }
  ${mediaQuery.minPhablet} {
    font-size: 1.2rem;
  }
`

export default About