import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SubTitle } from '../components/shared/styled';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Img from 'gatsby-image';

// TODO: Refact
const blinkTextCursor = keyframes`
  from {border-right-color: rgba(var(--text), .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 1px solid rgba(var(--text), .75);
  display: inline;
  animation: ${blinkTextCursor} .7s steps(44) infinite normal;
`;

const Title = styled.h1`
  color: #ffffff;
  padding: 1.3rem;
  /* want one word per line */
  word-spacing: 100vw;
  margin-block-end: 0;
  margin-block-start: 3rem;
  line-height: 2.5rem;
  font-size: 2.3rem;
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
  width: 70px;
  height: 70px;
`;

const Name = styled.div`
  font-weight: 500;
  max-width: 10rem;
  line-height: 1.4rem;
  margin-bottom: 0.2rem;
`;

const Description = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.6;
`;

const StyledHr = styled.hr`
  margin-bottom: 0;
`;

const Skills = styled.p`
  opacity: 0.7;
  font-weight: 300;
  display: inline-block;
  margin-bottom: 1rem;
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
  const [ skills, setSkills ] = useState('');
  const [ isAnimating, setIsAnimating ] = useState(false);
  const [ ref, inView ] = useInView();

  const typeWriter = (text, i=0) => {
    if (i < text.length) {
      setSkills(text.slice(0,i+1));
      setTimeout(() => {
        typeWriter(text, i+1);
      }, 100);
    } else {
      setIsAnimating(false);
    }
  }

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      typeWriter('react, node, python, go, angular, c++, java');
    }
  }, [inView])

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
        slug={'/about/'}
        description={
          'Conheça um pouco melhor o desenvolvedor desse humilde blog'
        }
      />
      <header>
        <div className="gatsby-highlight">
          <Title>Sobre mim</Title>
        </div>
      </header>
      <Row>
        <StyledImg
          alt="Imagem do autor do blog"
          fixed={avatar.childImageSharp.fixed}
        />
        <Column>
          <Name>Luiz Gustavo Oliveira Mariz</Name>
          <Description>desenvolvedor frontend</Description>
        </Column>
      </Row>
      <Content>
        <StyledHr />
        <Skills ref={ref}>
          {skills}
          <TextCursor />
        </Skills>
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
          fim, não importa a linguagem, tecnologia ou paradigma, a sensação mais
          legal é ver alguma coisa que você fez funcionando linda e maravilhosa.
          E, no geral, aprendo bem.
        </p>
        <SubTitle>projetos</SubTitle>
        <AnchorList>
          <a
            href="https://github.com/luizmariz/luizmariz.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esse blog
          </a>
          <a
            href="https://github.com/luizmariz/reactnd-project-flashcards/"
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
