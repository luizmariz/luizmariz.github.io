import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Bio from '../components/shared/Bio';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

function BlogIndexTemplate({ data, location }) {
  return (
    <Layout location={location}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <main>
        <PostList posts={data.allMarkdownRemark.edges}/>
      </main>
    </Layout>
  );
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            summary
            tags
          }
        }
      }
    }
  }
`;
