import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../assets/favicon.png'

const Head = ({ site, pageTitle, path, description, children }) => {
  const title = pageTitle ? `${pageTitle} | ${site.title}` : site.title
  const pageUrl = path ? site.url + path : site.url
  const desc = description || site.description
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <html lang="en" />
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:description" content={desc} />
      <meta name="description" content={desc} />
      <link rel="icon" type="image/png" href={favicon} />
      {children}
    </Helmet>
  )
}

export default Head

Head.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  pageTitle: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
}
