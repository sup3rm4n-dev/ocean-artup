import styled from 'styled-components'
import { ArrowDownCircle } from 'styled-icons/feather/ArrowDownCircle'
import { ArrowUpCircle } from 'styled-icons/feather/ArrowUpCircle'

const align = props => {
  switch (props.align) {
    case 'left':
      return `left: 1em;`
    case 'right':
      return `right: 1em;`
    case 'center':
    default:
      return `left: calc(50vw - ${props.size} / 2);`
  }
}

export const Arrow = styled(ArrowDownCircle).attrs(props => ({
  as: { up: ArrowUpCircle }[props.direction],
  size: props.size,
}))`
  z-index: 2;
  background: ${props => props.theme.lightGreen};
  color: ${props => props.theme.white};
  border-radius: 50%;
  transition: ${props => props.theme.shortTrans};
  position: ${props => props.position};
  bottom: 1em;
  ${props => align(props)};
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  :hover {
    transform: scale(1.15);
    background: ${props => props.theme.orange};
  }
`
