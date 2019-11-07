import React from 'react';
import { graphql, Link } from 'gatsby';
import { MdLabel } from 'react-icons/md';
import { formatTimestamp } from '../utils/helpers';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Bio from '../components/shared/Bio';
import SEO from '../components/SEO';

const PostsContainer = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 0.9rem;

  article {
    margin-top: 2rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    margin-top: 0;
    color: var(--secondary);
  }

  p {
    margin-top: 0.4rem;
    margin-bottom: 0;
    color: rgb(var(--text));
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: rgba(var(--text), 0.7);
  }

  svg {
    color: rgba(var(--heart), 0.5);
    margin-right: 0.5rem;
  }
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 10px;
  padding: 1.7rem 2rem;
  transition: border 0.1s ease-in;

  &:hover {
    border: 1px solid rgba(var(--text), 0.5);
  }
`;

function BlogIndexTemplate({ data, location }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <main>
        <PostsContainer>
          {posts.map(({ node }) => {
            const timestamp = formatTimestamp(
              node.frontmatter.date,
              node.fields.readingTime.minutes
            );

            return (
              <article key={node.fields.slug}>
                <Link to={node.fields.slug} className="anchor" rel="bookmark">
                  <Card>
                    <span>
                      <MdLabel />
                      {node.frontmatter.tags}
                    </span>
                    <header>
                      <h2>{node.frontmatter.title}</h2>
                      <time>{timestamp}</time>
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
