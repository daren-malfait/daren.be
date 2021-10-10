import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import SchemaOrg from './SchemaOrg';

import config from '../../../config/website';

import defaultMetaImage from '../../../static/assets/default-image.png';

import { SiteSiteMetadata } from '~types/gatsby/graphql-types';

interface SeoProps {
  description?: string;
  image?: string;
  isBlogPost?: boolean;
  lang?: string;
  metaImage?: string;
  slug?: string;
  title?: string;
  url?: string;
}

interface SeoWithMetaProps extends SeoProps {
  siteMetadata: SiteSiteMetadata;
}

function Seo({
  siteMetadata: seo,
  lang = 'nl',
  isBlogPost,
  metaImage,
  title = config.siteTitle,
  description = seo.description as string,
  image = `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  slug,
  url = slug ? `${seo.canonicalUrl}${slug}` : (seo.canonicalUrl as string),
}: SeoWithMetaProps) {
  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description as string} />
        <meta name="image" content={image as string} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url as string} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description as string} />
        <meta property="og:image" content={image as string} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description as string} />
        <meta name="twitter:image" content={image as string} />
      </Helmet>
      <SchemaOrg
        url={url as string}
        title={title}
        defaultTitle={seo.title as string}
      />
    </>
  );
}

function SeoWithQuery(props: SeoProps) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
        }
      }
    }
  `);

  return <Seo siteMetadata={siteMetadata} {...props} />;
}

export default SeoWithQuery;
