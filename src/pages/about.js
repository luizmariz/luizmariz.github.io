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
          sou dev na{' '}
          <a
            href="https://www.totvs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TOTVS
          </a>
          , no Rio de Janeiro/RJ :)
        </p>
        <p>
          Apesar de vender meu peixe como dev front-end, já lidei bastante com backend,
          me aventurei em projetos de IoT e em outras áreas da programação. No
          fim, não importa a linguagem, tecnologia ou paradigma, a sensação mais
          legal é ver alguma coisa que você fez funcionando linda e maravilhosa.
          E, no geral, aprendo bem.
        </p>
      </article>
    </Layout>
  );
}
