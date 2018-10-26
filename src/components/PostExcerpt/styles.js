import styled from 'styled-components'
import { Link } from 'gatsby'

export const Article = styled.article`
  background: ${props => props.theme.veryLightGray};
  padding: 0.7em 1em;
  border-radius: ${props => props.theme.mediumBorderRadius};
  p {
    margin-bottom: 0;
  }
  & + & {
    margin-top: 3em;
  }
`

export const Title = styled(Link)`
  font-size: 1.6em;
  font-weight: bold;
`
