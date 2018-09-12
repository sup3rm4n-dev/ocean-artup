import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Scroll from '../components/Scroll'
import PageBody from '../components/PageBody'

const LandingPage = ({ data: { page }, location }) => {
  const { title, subtitle, body } = page
  const { excerpt, htmlAst } = body && body.data
  return (
    <Layout pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle title={title} subtitle={subtitle} />
      <Scroll dir="down" to={1} justify="center" position="absolute" />
      {htmlAst && <PageBody isLanding htmlAst={htmlAst} />}
    </Layout>
  )
}

export default LandingPage

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "/" }) {
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
