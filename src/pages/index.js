import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import LandingPageBody from '../components/styles/LandingPageBody'

const LandingPage = ({ data, location }) => {
  const { page, site } = data
  const { title, subtitle, body } = page
  const { excerpt, html } = body && body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PageTitle title={title} subtitle={subtitle} />
      {html && <LandingPageBody dangerouslySetInnerHTML={{__html: html}} />}
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
          html
        }
      }
    }
  }
`