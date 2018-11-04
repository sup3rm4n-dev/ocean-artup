import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import Map from '../components/Map'

const mapProps = {
  options: {
    center: { lat: 43, lng: -10 },
    zoom: 3.6,
  },
  onMount: map => {
    new window.google.maps.Marker({
      position: { lat: 54.32791765, lng: 10.179823233482258 },
      map,
      title: 'GEOMAR Helmholtz-Zentrum für Ozeanforschung Kiel',
    })
    new window.google.maps.Marker({
      position: { lat: 27.9924864, lng: -15.3737573 },
      map,
      title: 'Research Site: Taliarte, Spain',
    })
  },
}

const Contact = ({ data: { page }, location }) => {
  const { title, subtitle, body } = page
  const { excerpt, htmlAst } = body && body.data
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle title={title} subtitle={subtitle} />
      {htmlAst && (
        <PageBody htmlAst={htmlAst}>
          <Map id="contactMap" {...mapProps} />
        </PageBody>
      )}
    </Global>
  )
}

export default Contact

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "contact" }) {
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
