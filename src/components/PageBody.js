import styled from 'styled-components'

export const PageBody = styled.article`
  background: ${props => props.theme.mainWhite};
  padding: 10vw;
  & * {
    max-width: ${props => props.theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`

export default PageBody