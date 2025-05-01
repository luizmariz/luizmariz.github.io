import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../../components/BlogPost';

function BlogPostTemplate({ data, pageContext, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <BlogPost
      location={location}
      title={frontmatter.title}
      summary={frontmatter.summary}
      date={frontmatter.date}
      readingTime={markdownRemark.fields.readingTime.minutes}
      slug={slug}
      html={html}
      previous={previous}
      next={next}
      tags={frontmatter.tags.split(',')}
    />
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(locale: "pt-br", formatString: "YYYY-MM-DD")
        title
        summary
        tags
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;
