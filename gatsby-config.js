module.exports = {
  siteMetadata: {
    title: 'Level 2',
    titleTemplate: 'Freelance wordpress web developer Melbourne, Sydney, Gold Coast, Brisbane, Newcastle, Perth',
    image: '/images/janejames.jpg',
    author: 'Jane James',
    description: 'Jane James is a Melbourne based web developer who also has clients in Sydney, Brisbane and Newcastle ',
    url: 'https://jane-james.com.au',
    paginationPageSize: 4, // Amount of posts displayed per listing page.
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'hero',
        path: `${__dirname}/content/sections/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about',
        path: `${__dirname}/content/sections/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'cards',
        path: `${__dirname}/content/sections/cards`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'contact',
        path: `${__dirname}/content/sections/contact`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/janejames.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
