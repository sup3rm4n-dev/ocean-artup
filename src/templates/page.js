import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/styles/PageBody'

const PageTemplate = ({ data, location }) => {
  const { page, site } = data
  const { title, body } = page
  const { excerpt, html } = body && body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PageTitle title={title} />
      {html && <PageBody dangerouslySetInnerHTML={{__html: html}} />}
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  fragment siteMetaQuery on RootQueryType {
    site {
      meta: siteMetadata {
        title
        url: siteUrl
      }
    }
  }
  query($slug: String!) {
    ...siteMetaQuery
    page: contentfulPage(slug: {eq: $slug}) {
      title
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