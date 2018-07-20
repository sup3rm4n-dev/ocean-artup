import styled, { css } from 'styled-components'

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  * {
    margin: 0;
  }
  > span {
    display: flex;
    align-items: center;
  }
  align-items: center;
  margin: 1.3rem 0 1rem;
  font-size: 0.9rem;
  ${props => props.inTitle && css`
    justify-content: center;
    max-width: 80%;
    width: max-content;
    padding: 0.2rem 0.6rem;
    margin: 0.75rem auto 1.5rem;
    color: ${props => props.theme.mainOrange};
    border: ${({theme}) => theme.smallBorder + ' solid ' + theme.mainWhite};
    background: ${props => props.theme.mainGray};
    border-radius: ${props => props.theme.largeBorderRadius};
    ${Category} {
      color: ${props => props.theme.mainGray};
      background: ${props => props.theme.mainOrange};
    }
  `}
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