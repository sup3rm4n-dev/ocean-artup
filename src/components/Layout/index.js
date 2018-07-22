import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'
import { Content } from './styles'
import theme from '../../utils/theme'
import favicon from '../../assets/favicon.png'

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
          }
        }
      }
    `}
    render={({ header, footer, site }) => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet>
            <link rel="icon" type="image/png" href={favicon} />
          </Helmet>
          <Header meta={site.meta} header={header.data} />
          <Content>{children}</Content>
          <Footer footer={footer.data} />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout