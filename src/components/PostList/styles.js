import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 1em;
  grid-column: 2 / -2;
  margin: calc(2em + 2vh) 0;
  font-size: 0.9em;
`
