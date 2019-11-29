import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Author from '../components/Author';
import TypeWriter from '../components/TypeWriter';

export default function({ location }) {
  return (
    <Layout location={location}>
      <SEO
        title={'Sobre mim'}
        slug={'/about/'}
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
          sou dev no time de growth hacking da{' '}
          <a
            href="https://www.mjvinnovation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MJV
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
