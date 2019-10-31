module.exports = {
  siteMetadata: {
    title: `Ocean artUp`,
    description: `ERC research project investigating articificial upwelling`,
    author: `Janosh Riebesell`,
    siteUrl: `https://ocean-artup.eu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'dbpftxjar4kc',
        accessToken:
          'c84ebd1a474873d15559f1ee04871d21d3c34c1dfe16c4398e71c1195cec1920',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122970164-2',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
