import styled from 'styled-components'

export const Container = styled.header`
  z-index: 2;
  grid-column: 2 / -2;
  grid-row: 2;
  text-align: center;
  color: ${props => props.theme.mainWhite};
  font-size: calc(1em + 1vw);
`
