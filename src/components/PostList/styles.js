import styled from 'styled-components'

export const Container = styled.div`
  font-size: 0.8em;
  line-height: 1.4em;
  grid-column: 2/-2;
  margin: calc(2em + 2vh) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 1em;
`
