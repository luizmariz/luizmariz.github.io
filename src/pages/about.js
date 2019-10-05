import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import img from '../assets/images/photo.png';

const Title = styled.h1`
  color: #FFFFFF;
  padding: 1.3rem;
  /* want one word per line */
  word-spacing: 100vw;
  margin-block-end: 0;
  margin-block-start: 3rem;
  line-height: 2.5rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;
`;
const Img = styled.img`
  vertical-align: middle;
  object-fit: cover;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;
const Name = styled.div`
  font-family: 'Fira Code Medium';
  max-width: 10rem;
  line-height: 1.4rem;
  margin-bottom: 0.4rem;
`;
const Description = styled.div`
  font-family: 'Fira Code Medium';
  text-transform: uppercase;
  opacity: 0.5;
`;

function AboutPage () {
  return (
    <Layout>
      <div className='gatsby-highlight'>
        <Title>sobre mim</Title>
      </div>
      <Row>
        <Img src={img} alt="blog author image" />
        <Column>
          <Name>Luiz Gustavo Oliveira Mariz</Name>
          <Description>desenvolvedor frontend</Description>
        </Column>
      </Row>
    </Layout>
  );
}

export default AboutPage;