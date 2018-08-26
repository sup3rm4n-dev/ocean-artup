import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ site, pageTitle, path, description }) => {
  const { title: siteTitle, url } = site.meta
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  return <Helmet>
    <title>{title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:url" content={url + path} />
    {description && <meta property="og:description" content={description} />}
    {description && <meta name="description" content={description} />}
  </Helmet>
}

export default Head