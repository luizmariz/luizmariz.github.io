import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { formatTimestamp } from '../utils/helpers';
import { MdArrowBack, MdArrowForward} from 'react-icons/md';
import Bio from '../components/shared/Bio';

const PostNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 3.5rem;
  list-style-type: none;

  svg {
    margin: 0 .3rem;
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
  font-family: 'Fira Code Medium';
  text-transform: uppercase;
  margin-bottom: 1.5rem !important;
  margin-top: 4.5rem !important;
  color: ${props => props.theme.primary};
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
            <small>{formatTimestamp(frontmatter.date, 'pt-br', minutes)}</small>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <aside>
        <nav>
          <BlogIndex
            to='/'
            className='anchor'
          >
            luiz ipsum
          </BlogIndex>
          <Bio />
          <PostNav>
            <li className='prev'>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel='prev'
                >
                  <MdArrowBack />
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel='next'
                >
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