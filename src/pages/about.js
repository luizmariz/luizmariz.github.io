import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h2`
  color: #FFFFFF;
  padding: 1.3rem;
  /* want one word per line */
  word-spacing: 100vw;
  margin-block-end: 0;
  margin-block-start: 3rem;
  line-height: 2rem;
`

function AboutPage () {
  return (
    <Layout>
      <div className='gatsby-highlight'>
        <Title>sobre mim</Title>
      </div>
    </Layout>
  );
}

export default AboutPage;