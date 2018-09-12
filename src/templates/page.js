import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const PageTemplate = ({ data: { page }, location }) => {
  const { title, body } = page
  const { excerpt, htmlAst } = body && body.data
  return (
    <Layout pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle title={title} />
      {htmlAst && <PageBody htmlAst={htmlAst} />}
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
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
