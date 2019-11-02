import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import img from '../../assets/images/default-img.png';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        siteDescription
        siteUrl
      }
    }
  }
`;

function SEO({ meta, title, description, image, keywords, slug, lang }) {
  const data = useStaticQuery(query);
  const { siteMetadata } = data.site;
  const url = `${siteMetadata.siteUrl}${slug}`;
  const siteDescription = description || siteMetadata.siteDescription;
  const siteImage = image
    ? `${siteMetadata.siteUrl}/${image}`
    : `${siteMetadata.siteUrl}/${img}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title,
          }
        : {
            title: `${siteMetadata.title} — Um blog, por Luiz`,
          })}
      meta={[
        {
          name: 'description',
          content: siteDescription,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: title || siteMetadata.title,
        },
        {
          property: 'og:description',
          content: siteDescription,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title || siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: siteDescription,
        },
      ]
        .concat(
          siteImage
            ? [
                {
                  property: 'og:image',
                  content: siteImage,
                },
                {
                  name: 'twitter:image',
                  content: siteImage,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: '',
  lang: 'pt-br',
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
};

export default SEO;
