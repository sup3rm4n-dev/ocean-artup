import styled from 'styled-components'

export const Container = styled.header`
  z-index: 2;
  grid-column: 2 / -2;
  grid-row: 2;
  color: ${props => props.theme.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  a {
    color: inherit;
  }
`
