import styled from 'styled-components'

export const Post = styled.article`
  height: 100%;
  display: grid;
  background: ${props => props.theme.veryLightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  border: 1px solid ${props => props.theme.lightGray};
  overflow: hidden;
  > div {
    padding: 0.7em 1em;
    display: grid;
    grid-gap: 0.5em;
  }
`

export const Title = styled.h3`
  margin: 0;
`

export const Excerpt = styled.p`
  margin: 0;
`
