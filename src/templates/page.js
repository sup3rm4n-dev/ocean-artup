import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const PageTemplate = ({ data, location }) => {
  const { page, site } = data
  const { title, subtitle, body } = page
  const { excerpt, html } = body && body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PageTitle title={title} subtitle={subtitle} />
      {html && <PageBody dangerouslySetInnerHTML={{__html: html}} />}
    </Layout>
  )
}

export default PageTemplate

export const siteMetaQuery = graphql`
  fragment siteMetaQuery on RootQueryType {
    site {
      meta: siteMetadata {
        title
        url: siteUrl
      }
    }
  }
`

export const pageQuery = graphql`
  query($slug: String!) {
    ...siteMetaQuery
    page: contentfulPage(slug: {eq: $slug}) {
      title
      subtitle
      slug
      body {
        data: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`