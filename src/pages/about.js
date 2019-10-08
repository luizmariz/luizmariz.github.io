import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import img from '../assets/images/photo.png';
import { SubTitle } from '../components/shared/styled';

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
  margin-bottom: 2.65rem;
  margin-top: 3rem;
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
  width: 4.5rem;
  height: 4.5rem;
`;
const Name = styled.div`
  font-family: 'Fira Code Medium';
  max-width: 10rem;
  line-height: 1.4rem;
  margin-bottom: 0.2rem;
`;
const Description = styled.div`
  font-family: 'Fira Code Medium';
  text-transform: uppercase;
  opacity: 0.5;
`;
const StyledHr = styled.hr`
  margin-bottom: 0;
`;
const Skills = styled.p`
  opacity: 0.4;
`;
const AnchorList = styled.div`
  margin-block-end: 1rem;
  margin-block-start: 1rem;

  & > a {
    margin-right: 1rem;
  }
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
      <StyledHr />
      <Skills>react, node, angular, python, go, c++, java...</Skills>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti
        sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit
        amet nibh non tellus tristique interdum. Atirei o pau no gatis, per
        gatis num morreus. Todo mundo vê os porris que eu tomo, mas ninguém vê
        os tombis que eu levo!
      </p>
      <SubTitle>projetos</SubTitle>
      <AnchorList>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
        <a href='http://www.google.com.br' target='_blank' rel='noopener noreferrer'>example</a>
      </AnchorList>
    </Layout>
  );
}

export default AboutPage;