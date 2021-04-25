/* eslint-disable sort-keys */
/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
const React = require(`react`);
const config = require('./config/website');
require(`ts-node`).register();

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = config.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: [],
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
    trackingId: config.siteGAID,
    // social: {
    //   fbAppID: config.fbAppID,
    // },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: `*`, allow: `/`, disallow: [`/preview`] }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
      resolve: `gatsby-plugin-svgr-loader`,
    },
    `gatsby-plugin-react-helmet`,
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      options: {
        alias: {
          '~api': `${__dirname}/src/api`,
          '~components': `${__dirname}/src/components`,
          '~hooks': `${__dirname}/src/hooks`,
          '~images': `${__dirname}/src/images`,
          '~layouts': `${__dirname}/src/layouts`,
          '~modules': `${__dirname}/src/modules`,
          '~pages': `${__dirname}/src/pages`,
          '~styles': `${__dirname}/config/styles`,
          '~templates': `${__dirname}/src/templates`,
          '~types': `${__dirname}/src/@types`,
          '~utils': `${__dirname}/src/utils`,
        },
      },
      resolve: `gatsby-plugin-alias-imports`,
    },
  ],
};

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  headComponents.sort(a => {
    if (a.props && a.props[`data-react-helmet`]) {
      return 0;
    }
    return 1;
  });
  replaceHeadComponents(headComponents);
};
