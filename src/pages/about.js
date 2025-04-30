import React from 'react';
import thumbnail from '../assets/images/default-background.jpg';
import AuthorInfo from '../components/AuthorInfo';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

function About({ location }) {
  return (
    <Layout location={location}>
      <Seo
        title={'Sobre mim'}
        slug={'/about/'}
        image={thumbnail}
        description={
          'Conheça um pouco melhor o desenvolvedor desse humilde blog'
        }
      />
      <AuthorInfo />
    </Layout>
  );
}

export default About;
