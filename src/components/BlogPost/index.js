import PropTypes from 'prop-types';
import React from 'react';
import { formatTimestamp } from '../../utils/helpers';
import Footer from '../BlogPostFooter';
import SignUp from '../BlogPostSignUp';
import Layout from '../Layout';
import Seo from '../Seo';

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
      <main>
        <article>
          <header>
            <h1>{title}</h1>
            <time>{formatTimestamp(date, readingTime)}</time>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <SignUp />
      <Footer previous={previous} next={next} />
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
