import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

function BlogPostTemplate ({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogPostTemplate;
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;