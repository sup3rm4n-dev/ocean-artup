import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const PageTemplate = ({ data, location }) => {
  const { page, site } = data
  const { title, body } = page
  const { excerpt, htmlAst } = body && body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PageTitle title={title} />
      {htmlAst && <PageBody htmlAst={htmlAst} />}
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
          htmlAst
        }
      }
    }
  }
`