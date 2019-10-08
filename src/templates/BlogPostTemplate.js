import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { formatDate } from '../utils/helpers';

const Date = styled.span`
  font-size: .88rem;
`;

function BlogPostTemplate ({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { minutes } = markdownRemark.fields.readingTime;
  const { previous, next, slug } = pageContext;

  return (
    <Layout>
      <main>
        <article>
          <header>
            <h1>{frontmatter.title}</h1>
            <Date>{formatDate(frontmatter.date, 'pt-br')} · Leitura de {Math.ceil(minutes)} min</Date>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <aside>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{ marginRight: 20 }}
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Layout>
  );
};

export default BlogPostTemplate;

// No articles yet 😢
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;