import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import theme from '../utils/theme'
import background from '../assets/background.jpg'

injectGlobal`
  body {
    background: url(${background}) no-repeat center center fixed; 
    background-size: cover;
    text-align: justify;
    a {
      color: inherit;
    }
  }
  #___gatsby {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: rgba(0, 0, 0, 0.3);
  }
`

const Content = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
        {
          site {
          meta: siteMetadata {
            title
            url: siteUrl
          }
        }
        header: contentfulJson(title: {eq: "Header"}) {
          data {
            external {
              googleScholar
            }
            nav {
              url
              title
            }
          }
        }
        footer: contentfulJson(title: {eq: "Footer"}) {
          data {
            copyright
            authorsNote
            links {
              url
              title
            }
          }
        }
      }
    `}
    render={({ header, footer, site }) => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header meta={site.meta} header={header.data} />
          <Content>{children}</Content>
          <Footer footer={footer.data} />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout