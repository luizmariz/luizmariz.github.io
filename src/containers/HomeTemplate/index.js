import { graphql } from 'gatsby';
import React from 'react';
// import img from '../assets/images/default-img.png';
import Intro from '../../components/Intro';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import Seo from '../../components/Seo';

function HomeTemplate({ data, location }) {
  return (
    <Layout location={location}>
      <Seo />
      <main>
        <Intro />
        <PostList posts={data.allMarkdownRemark.edges} />
      </main>
    </Layout>
  );
}

export default HomeTemplate;

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
