module.exports = {
  siteMetadata: {
    title: "David Starr",
    author: "David Starr",
    description: "An online portfolio for David Starr"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'David Starr Portfolio',
        short_name: 'David Starr',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/ds-logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
  ],
}
