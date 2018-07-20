import { css } from 'styled-components'

const About = css`
  about {
    display: block;
    background: ${props => props.theme.lightGreen};
    padding: 3rem;
    font-size: 1.2rem;
    p {
      max-width: ${props => props.theme.maxWidth};
    }
  }
`

export default About