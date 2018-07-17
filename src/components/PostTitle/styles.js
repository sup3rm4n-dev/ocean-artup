import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.header`
  color: ${props => props.theme.mainWhite};
  text-align: center;
  margin: 10vh 0;
  display: grid;
  justify-content: center;
  justify-items: center;
`

export const Title = styled.h1`
font-size: 1.6rem;
`

export const Meta = styled.div`
  font-size: 0.9rem;
  width: fit-content;
  padding: 0 0.6rem;
  margin: 0.75rem 0 1.5rem;
  color: ${props => props.theme.mainOrange};
  background: ${props => props.theme.mainGray};
  border: ${({theme}) => theme.smallBorder + ' solid ' + theme.mainWhite};
  border-radius: ${props => props.theme.largeBorderRadius};
`

export const BackLink = styled(Link)`
  width: max-content;
  padding: 0 0.6rem;
  border-radius: ${props => props.theme.largeBorderRadius};
  background: rgba(0, 0, 0, 0.5);
`