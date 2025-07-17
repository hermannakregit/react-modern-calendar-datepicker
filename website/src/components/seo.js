import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import logoFavIcon from '../images/icon.png';

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  title = '',
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultImage = 'https://user-images.githubusercontent.com/20098648/76241893-f6722880-624a-11ea-9a80-eace8a4a27f0.png';
  const siteUrl = 'https://kiarash-z.github.io/react-modern-calendar-datepicker';
  const defaultKeywords = [
    'React', 'Modern', 'Calendar', 'Date Picker',
    'React Modern Calendar Date Picker', 'Picker', 'Date',
    'Persian Date Picker', 'Persian'
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { property: 'og:image', content: defaultImage },
        { property: 'og:url', content: siteUrl },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: site.siteMetadata.author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
        { name: 'twitter:image:src', content: defaultImage },
        { name: 'keywords', content: defaultKeywords.join(', ') },
        { name: 'theme-color', content: '#0eca2d' },
        ...(keywords.length > 0
          ? [{ name: 'keywords', content: [...defaultKeywords, ...keywords].join(', ') }]
          : []),
        ...meta
      ]}
    >
      <link rel="shortcut icon" href={logoFavIcon} />
    </Helmet>
  );
};

export { SEO };