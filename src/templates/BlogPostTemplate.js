import React from 'react';
import { graphql, Link } from 'gatsby';
import { formatTimestamp } from '../utils/helpers';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Bio from '../components/shared/Bio';
import SEO from '../components/SEO';

const PostNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 3.5rem;
  list-style-type: none;

  svg {
    margin: 0 0.3rem;
  }

  li {
    margin-top: 2.5rem;
  }

  li.prev {
    text-align: right;
  }

  a::before {
    content: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const BlogIndex = styled(Link)`
  text-transform: uppercase;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;

  h3 {
    margin-block-start: 1.8em;
    margin-block-end: 0.2em;
    font-size: 1.5rem;
    color: var(--primary);
    font-weight: normal;
    font-family: 'Fira Code SemiBold';
  }
`;

function BlogPostTemplate({ data, pageContext, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { minutes } = markdownRemark.fields.readingTime;
  const { previous, next, slug } = pageContext;

  return (
    <Layout location={location}>
      <SEO
        meta={[
          {
            property: 'og:type',
            content: 'article',
          },
        ]}
        title={frontmatter.title}
        description={frontmatter.summary}
        slug={slug}
        keywords={frontmatter.tags}
      />
      <main>
        <article>
          <header>
            <h1>{frontmatter.title}</h1>
            <time>{formatTimestamp(frontmatter.date, minutes)}</time>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <aside>
        <nav>
          <BlogIndex to="/" className="anchor">
            <h3>luiz ipsum</h3>
          </BlogIndex>
          <Bio />
          <PostNav>
            <li className="prev">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <MdArrowBack />
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  <MdArrowForward />
                </Link>
              )}
            </li>
          </PostNav>
        </nav>
      </aside>
    </Layout>
  );
}

export default BlogPostTemplate;

// No articles yet 😢
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
