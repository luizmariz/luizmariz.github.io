import React from 'react';
import AuthorInfo from '../components/AuthorInfo';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
// import img from '../assets/images/default-img.png';

function About({ location }) {
  return (
    <Layout location={location}>
      <Seo
        title={'Sobre mim'}
        slug={'/about/'}
        // image={img}
        description={
          'Conheça um pouco melhor o desenvolvedor desse humilde blog'
        }
      />
      <AuthorInfo />
    </Layout>
  );
}

export default About;
