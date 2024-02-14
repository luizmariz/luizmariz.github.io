import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Bio from '../components/shared/Bio';
import Seo from '../components/Seo';
import PostList from '../components/PostList';
import img from '../assets/images/default-img.png';

function BlogIndexTemplate({ data, location }) {
  return (
    <Layout location={location}>
      <Seo image={img} />
      <aside>
        <Bio />
      </aside>
      <main>
        <PostList posts={data.allMarkdownRemark.edges} />
      </main>
    </Layout>
  );
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(locale: "pt-br", formatString: "YYYY-MM-DD")
            title
            summary
            tags
          }
        }
      }
    }
  }
`;
