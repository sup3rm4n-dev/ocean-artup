import styled, { injectGlobal } from 'styled-components'

import background from '../../assets/background.jpg'

injectGlobal`
  body {
    background: url(${background}) no-repeat center fixed; 
    background-size: cover;
  }
  #___gatsby {
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: rgba(0, 0, 0, 0.3);
  }
`

export const Content = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
`