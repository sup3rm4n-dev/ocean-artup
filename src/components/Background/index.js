import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Image } from './styles'

const Background = ({ background, path }) => (
  <Image fluid={background.fluid} path={path} />
)

Background.propTypes = {
  background: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
  }).isRequired,
}

const query = graphql`
  {
    background: contentfulAsset(title: { eq: "Background" }) {
      fluid(quality: 100, maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Background {...data} {...props} />}
  />
)
