import styled from 'styled-components'
import { Link } from 'gatsby'

export const Article = styled.article`
  background: ${props => props.theme.veryLightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 25vh;
  }
  > div {
    padding: 0.7em 1em;
    display: grid;
    grid-gap: 0.5em;
  }
`

export const Title = styled(Link)`
  font-size: 1.3em;
  font-weight: bold;
`

export const Excerpt = styled.p`
  margin: 0;
`
