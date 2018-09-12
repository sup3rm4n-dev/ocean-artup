import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Page = styled.article`
  grid-column: 3;
  margin: 9vh 0;
  ${mediaQuery.minPhablet} {
    text-align: justify;
  }
  img {
    width: 100%;
  }
  .caption {
    display: block;
    font-size: 0.9em;
    text-align: center;
    font-style: italic;
    margin-bottom: 1em;
  }
`

export default Page
