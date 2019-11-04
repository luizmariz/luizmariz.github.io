import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SubTitle } from '../components/shared/styled';
import SEO from '../components/SEO';
import Img from 'gatsby-image';

const Title = styled.h1`
  color: #ffffff;
  padding: 1.3rem;
  /* want one word per line */
  word-spacing: 100vw;
  margin-block-end: 0;
  margin-block-start: 3rem;
  line-height: 2.5rem;
`;

const Row = styled.aside`
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

const StyledImg = styled(Img)`
  vertical-align: middle;
  object-fit: cover;
  border-radius: 50%;
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
  opacity: 0.4;
`;

const StyledHr = styled.hr`
  margin-bottom: 0;
`;

const Skills = styled.p`
  opacity: 0.5;
`;

const AnchorList = styled.section`
  margin-block-end: 1rem;
  margin-block-start: 1rem;

  a {
    margin-right: 1.2rem;
  }
`;

const Content = styled.article`
  h2 {
    margin-top: 3rem;
  }
`;

function AboutPage({ location }) {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "photo.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <Layout location={location}>
      <SEO
        title={'Sobre mim'}
        slug={'/about'}
        description={'Um pouco sobre o criador desse humilde blog'}
      />
      <header>
        <div className="gatsby-highlight">
          <Title>sobre mim</Title>
        </div>
      </header>
      <Row>
        <StyledImg
          alt="Imagem do autor do blog"
          fixed={avatar.childImageSharp.fixed}
          draggable={false}
          fadeIn={false}
        />
        <Column>
          <Name>Luiz Gustavo Oliveira Mariz</Name>
          <Description>desenvolvedor frontend</Description>
        </Column>
      </Row>
      <Content>
        <StyledHr />
        <Skills>react, node, python, go, angular, c++, java ...</Skills>
        <p>
          Oi, meu nome é Luiz, nasci no interior de Minas Gerais e atualmente
          sou dev no time de growth hacking da{' '}
          <a
            href="https://mjvinnovation.com"
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
          fim, não importa a linguagem, tecnologia ou paradigma porque a
          sensação mais legal é ver alguma coisa que você fez funcionando linda
          e maravilhosa. E, no geral, aprendo bem as coisas.
        </p>
        <SubTitle>projetos</SubTitle>
        <AnchorList>
          <a
            href="https://github.com/luizmariz/luizmariz.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esse blog
          </a>
          <a
            href="https://github.com/luizmariz/reactnd-project-flashcards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Um app simples de flashcards feito com React Native
          </a>
        </AnchorList>
      </Content>
    </Layout>
  );
}

export default AboutPage;
