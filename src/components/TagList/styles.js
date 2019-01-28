import styled from "styled-components"

export const TagListContainer = styled.div`
  grid-column: 2 / -2;
  text-align: center;
  margin: 3em 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 0 1em 1em 0;
  }
`

export const TagIcon = styled.img`
  height: 1.75em;
  width: 1.75em;
  min-width: 1.75em;
  margin-right: 0.3em;
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0.2em;
`

export const Tag = styled.button`
  display: flex;
  font-size: 1em;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.1em 0.5em;
  margin: 0 1em 1em 0;
  white-space: nowrap;
  color: ${props => props.theme.darkGray};
  border-radius: ${props => props.theme.smallBorderRadius};
  background: ${({ active, theme }) =>
    active ? theme.orange : theme.lighterGray};
  align-items: center;
`
