import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import img from '../../assets/images/photo.png';

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
    font-size: .85rem;
  }
`;
const Img = styled.img`
  vertical-align: middle;
  object-fit: cover;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
`;

function Bio () {
  return (
    <Row>
      <Img src={img} alt="blog author image" />
      <Column>
        <p>
          Blog por <Link to='/about'>Luiz Gustavo</Link>{'\n'}
          <code class="language-text">['🥚', '🐔'].sort()</code>
        </p>
      </Column>
    </Row>
  );
}

export default Bio;