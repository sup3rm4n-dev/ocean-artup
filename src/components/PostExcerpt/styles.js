import styled from 'styled-components'
import { Link } from 'gatsby'

export const Article = styled.article`
  & + & {
    margin-top: 2em;
  }
`

export const Title = styled(Link)`
  font-size: 1.6em;
  font-weight: bold;
`
