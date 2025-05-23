import PropTypes from 'prop-types';
import React from 'react';
import { formatTimestamp } from '../../utils/helpers';
import BlogPostFooter from '../BlogPostFooter';
import Layout from '../Layout';
import Seo from '../Seo';
import * as S from './styled';

function BlogPost({
  location,
  slug,
  title,
  date,
  readingTime,
  summary,
  html,
  previous,
  next,
  image,
  tags
}) {
  return (
    <Layout location={location}>
      <Seo
        title={title}
        description={summary}
        slug={slug}
        image={image}
        meta={[
          {
            property: 'article:published_time',
            content: date
          },
          ...tags.map((tag) => ({
            property: 'article:tag',
            content: tag
          }))
        ]}
      />
      <S.MainWrapper>
        <article>
          <S.PostHeader>
            <h1>{title}</h1>
            <time>{formatTimestamp(date, readingTime)}</time>
          </S.PostHeader>
          <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </S.MainWrapper>
      <BlogPostFooter previous={previous} next={next} />
    </Layout>
  );
}

BlogPost.propTypes = {
  location: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  previous: PropTypes.any,
  next: PropTypes.any,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default BlogPost;
