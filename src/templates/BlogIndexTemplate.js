import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { formatTimestamp } from '../utils/helpers';
import Bio from '../components/shared/Bio';

const PostsContainer = styled.div`
  margin-top: 3.5rem;

  article {
    margin-top: 2rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-family: 'Fira Code Medium';
    color: ${props => props.theme.secondary};
  }

  p {
    margin-top: 0.4rem;
  }

  a {
    border: none;
    color: inherit;
  }

  a::before {
    content: none;
  }
`;
const Card = styled.div`
  border: 1px solid ${props => props.theme.text.concat('33')};
  border-radius: 10px;
  padding: 0rem 2rem;
`;

function BlogIndexTemplate ({ data, location }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <aside>
        <Bio />
      </aside>
      <main>
        <PostsContainer>
          {posts.map(({ node }) => {
            return (
              <article key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <Card>
                    <header>
                      <h2>{node.frontmatter.title}</h2>
                      <small>
                        {formatTimestamp(node.frontmatter.date, node.fields.readingTime.minutes)}
                      </small>
                    </header>
                    <p>{node.frontmatter.summary}</p>
                  </Card>
                </Link>
              </article>
            );
          })}
        </PostsContainer>
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