import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const LandingPage = ({ data, location }) => {
  const { page, site } = data
  const { title, subtitle, body } = page
  const { excerpt, htmlAst } = body && body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet site={site} path={path} description={excerpt} />
      <PageTitle title={title} subtitle={subtitle} />
      {htmlAst && <PageBody isLanding htmlAst={htmlAst} />}
    </Layout>
  )
}

export default LandingPage

export const landingPageQuery = graphql`
  query Landing {
    ...siteMetaQuery
    page: contentfulLandingPage(slug: {eq: "landing"}) {
      title
      subtitle
      body {
        data: childMarkdownRemark {
          excerpt
          htmlAst
        }
      }
    }
  }
`