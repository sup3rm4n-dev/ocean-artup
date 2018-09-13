import styled from 'styled-components'

const About = styled.section`
  background: ${props => props.theme.lightGreen};
  padding: 10vh 5vw;
  text-align: center;
  p {
    margin: auto;
    max-width: ${props => props.theme.maxWidth};
  }
`

export default About
