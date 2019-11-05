import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  max-width: 25rem;

  p {
    margin: 0;
    padding: 0;
    white-space: pre-line;
  }

  a::before {
    content: none;
  }

  code {
    font-size: 1.1rem;
  }
`;

const StyledImg = styled(Img)`
  vertical-align: middle;
  object-fit: cover;
  border-radius: 50%;
  width: 55;
  height: 55;
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
        draggable={false}
      />
      <Column>
        <p>
          Blog por <Link to="/about">Luiz Gustavo</Link>
          {'\n'}
          <code>
            ['
            <span role="img" aria-label="ovo">
              🥚
            </span>
            ', '
            <span role="img" aria-label="galinha">
              🐔
            </span>
            '].sort()
          </code>
        </p>
      </Column>
    </Row>
  );
}

export default Bio;
