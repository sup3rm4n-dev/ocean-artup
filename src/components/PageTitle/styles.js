import styled from 'styled-components'

export const Layout = styled.header`
  text-align: center;
  margin: 8rem 0 10rem;
`

export const Title = styled.h1`
  color: ${props => props.theme.mainWhite};
  font-size: 3.5rem;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.mainWhite};
  font-size: 2.5rem;
  font-weight: 100;
`