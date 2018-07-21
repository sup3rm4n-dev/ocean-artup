import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.header`
  color: ${props => props.theme.mainWhite};
  text-align: center;
  margin: 10vh 0;
  a {
    color: inherit;
  }
`

export const Title = styled.h1`
font-size: 1.6rem;
`

export const BackLink = styled(Link)`
  width: max-content;
  padding: 0.2rem 0.6rem;
  border-radius: ${props => props.theme.largeBorderRadius};
  background: rgba(0, 0, 0, 0.5);
`