import styled from 'styled-components'
import { Link } from 'gatsby'

export const Article = styled.article`
  & + & {
    margin-top: 3rem;
  }
`

export const Title = styled.h1`
  margin: 0.5rem 0;
  font-size: 1.5rem;
`

export const TitleLink = styled(Link)`
  color: ${props => props.theme.lightGreen};
`

export const Meta = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  margin: 1.3rem 0 1rem;
  font-size: 0.9rem;
`

export const Category = styled.span`
  padding: 0 0.5rem;
  border-radius: ${props => props.theme.largeBorderRadius};
  background: ${props => props.theme.lightGray};
  margin-left: 0.5rem;
`

export const AuthorPhoto = styled.img`
  width: 2rem;
  border-radius: 50%;
  margin: 0 0 0 0.5rem;
`