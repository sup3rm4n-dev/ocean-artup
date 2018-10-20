import styled from 'styled-components'

export const Container = styled.header`
  z-index: 2;
  grid-column: 2 / -2;
  grid-row: 1 / 3;
  color: ${props => props.theme.mainWhite};
  display: grid;
  align-content: center;
  justify-items: center;
`
