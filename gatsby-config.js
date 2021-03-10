module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Starter`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `@pbrighton`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: 'http://localhost/gatsby-wordpress',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        acfOptionsPageids: [],
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/tags',
          '**/*/*/taxonomies',
          '**/*/*/users',
          '**/*/*/menus',
          '**/*/*/portfolio',
          '**/*/*/logo',
          '**/*/*/favicon'
        ]
      }
    }
  ]
}
