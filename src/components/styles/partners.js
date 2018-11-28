import { css } from 'styled-components'

const participants = css`
  section.partners {
    padding: 5vh 5vw;
    display: grid;
    grid-gap: 1em 2em;
    max-width: ${props => props.theme.maxWidth};
    justify-content: center;
    h1 {
      grid-column: 1/-1;
      margin: 0;
      width: max-content;
      justify-self: center;
      background: ${props => props.theme.lightGreen};
      border-radius: ${props => props.theme.mediumBorderRadius};
      padding: 0 1em;
      font-size: 1.5em;
    }
    p {
      margin: 0;
    }
    grid-template-columns: repeat(auto-fit, minmax(8em, 10em));
  }
`

export default participants
