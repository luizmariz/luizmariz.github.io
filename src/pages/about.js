import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Author from '../components/Author';
import TypeWriter from '../components/TypeWriter';
import img from '../assets/images/default-img.png';

export default function({ location }) {
  return (
    <Layout location={location}>
      <SEO
        title={'Sobre mim'}
        slug={'/about/'}
        image={img}
        description={
          'Conheça um pouco melhor o desenvolvedor desse humilde blog'
        }
      />
      <header>
        <h1>Sobre mim</h1>
      </header>
      <Author />
      <TypeWriter value="React, NodeJs, Python, Go, Angular, Java e C++" />
      <article>
        <p>
          Oi, meu nome é Luiz, nasci no interior de Minas Gerais e atualmente
          sou dev no{' '}
          <a
            href="https://www.fab.mil.br/organizacoes/mostra/67/CENTRO%20DE%20COMPUTA%C3%87%C3%83O%20DE%20AERON%C3%81UTICA%20DO%20RIO%20DE%20JANEIRO"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCA-RJ
          </a>
          , no Rio de Janeiro/RJ, além de ser um estudante em ciência da
          computação na UFRJ e técnico em eletrônica pelo CEFET/RJ.
        </p>
        <p>
          Apesar de vender meu peixe como dev react, lido bastante com backend,
          me aventurei em projetos de IoT e em outras perólas da programação. No
          fim, não importa a linguagem, tecnologia ou paradigma, a sensação mais
          legal é ver alguma coisa que você fez funcionando linda e maravilhosa.
          E, no geral, aprendo bem.
        </p>
      </article>
    </Layout>
  );
}
