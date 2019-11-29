import React from 'react';
import { graphql } from 'gatsby';
import BlogPost from '../components/BlogPost';

function BlogPostTemplate({ data, pageContext, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <BlogPost
      location={location}
      title={frontmatter.title}
      summary={frontmatter.summary}
      image={frontmatter.image}
      date={frontmatter.date}
      readingTime={markdownRemark.fields.readingTime.minutes}
      slug={slug}
      html={html}
      previous={previous}
      next={next}
    />
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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
