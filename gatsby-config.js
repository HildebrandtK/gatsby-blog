/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/gatsby-blog`,
  siteMetadata: {
    title: `Gatsby Blog page`,
    description: `A simple gatsby blog page`,
    author: `Kacper Hildebrandt`,
    siteUrl: `http://hildebrandtk.gtihub.io/gatsby-blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,

    `gatsby-transformer-sharp`,
  ],
}
