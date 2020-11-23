module.exports = {
  siteMetadata: {
    title: `Taylor's Chapel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jerkeeler`,
    siteUrl: `https://taylorschapel.org`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-108069665-1',
    //     anonymize: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/contact/success`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `https://taylorschapel.org/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/contact/success'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('tailwindcss'),
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     tailwind: true,
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   },
    // },
  ],
};
