import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Text = styled.p`
  margin: 0;
  padding: 0;
  white-space: pre-line;
  padding-left: 1rem;
  max-width: 16rem;

  a::before {
    content: none;
  }

  @media (max-width: 355px) {
    max-width: 11rem;
  }

  @media (min-width: 672px) {
    max-width: 25rem;
  }
`;

const Row = styled.div`
  display: flex;
`;

const StyledImg = styled(Img)`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`;

function Bio() {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "photo.png" }) {
          childImageSharp {
            fixed(width: 55, height: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <Row>
      <StyledImg
        alt="Imagem do autor do blog"
        fixed={avatar.childImageSharp.fixed}
        style={{display: "inherit"}}
      />
      <Text>
        Blog por <Link to="/about/">Luiz Gustavo</Link>
        {'\n'}
        Grande entusiasta do eXtreme Go Horse.
      </Text>
    </Row>
  );
}

export default Bio;
