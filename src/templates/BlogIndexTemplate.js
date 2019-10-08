import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { formatTimestamp } from '../utils/helpers';
import Bio from '../components/shared/Bio';

function BlogIndexTemplate ({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <aside>
        <Bio />
      </aside>
      <main>
      {posts.map(({ node }) => {
            const title = node.frontmatter.title;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3>
                  </h3>
                  <small>
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })}
      </main>
    </Layout>
  );
};

export default BlogIndexTemplate;

export const pageQuery = graphql`
  {
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC } ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`;