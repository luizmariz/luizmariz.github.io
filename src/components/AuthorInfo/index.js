import { StaticImage } from 'gatsby-plugin-image';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import React from 'react';

import { AnimatedText } from '../../utils/shared.styled';
import TechStackBanner from '../TechStackBanner';
import * as S from './styled';

function AuthorInfo() {
  const technologies = [
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
    { name: 'Sass', icon: 'SiSass', color: '#C76494' },
    { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
    { name: 'React', icon: 'SiReact', color: '#149ECA' },
    { name: 'NestJS', icon: 'SiNestjs', color: '#E0234E' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: '#dddddd' },
    { name: 'Gatsby', icon: 'SiGatsby', color: '#663399' },
    { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
    { name: 'GraphQL', icon: 'SiGraphql', color: '#d671b5' },
    { name: 'Cypress', icon: 'SiCypress', color: '#a2e6ca' },
    { name: 'Jest', icon: 'SiJest', color: '#C21325' },
    { name: 'Flutter', icon: 'SiFlutter', color: '#04599C' },
    { name: 'Rollup', icon: 'SiRollupdotjs', color: '#EC4A3F' },
    { name: 'Webpack', icon: 'SiWebpack', color: '#1C78C0' },
    { name: '.NET', icon: 'SiMicrosoft', color: '#512BD4' },
    { name: 'Nx', icon: 'SiNx', color: '#143055' },
    { name: 'Nginx', icon: 'SiNginx', color: '#009639' },
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express', icon: 'SiExpress', color: '#dddddd' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
    { name: 'Spring', icon: 'SiSpring', color: '#6DB33F' },
    { name: 'Laravel', icon: 'SiLaravel', color: '#FF2D20' },
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'SQLite', icon: 'SiSqlite', color: '#2f88b2' },
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'Yarn', icon: 'SiYarn', color: '#2C8EBB' },
    { name: 'npm', icon: 'SiNpm', color: '#CB3837' },
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Insomnia', icon: 'SiInsomnia', color: '#5849BE' },
    { name: 'Heroku', icon: 'SiHeroku', color: '#7654a2' }
  ];

  return (
    <S.Container>
      <S.Column>
        <S.Text>
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            height="32px"
          />{' '}
          Olá, eu sou o <S.TextBold>Luiz!</S.TextBold>
        </S.Text>
        <S.Text>
          Um dev <S.TextBold>faz tudo</S.TextBold> com + de 6 anos de
          experiência buscando soluções para todo tipo de problema.
        </S.Text>
        <S.Text>
          Nasci no interior de Minas Gerais e atualmente trabalho como
          desenvolvedor de software na{' '}
          <a
            href="https://www.totvs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TOTVS
          </a>
          , no Rio de Janeiro/RJ.
        </S.Text>
        <S.Text>
          Acredito que uma das melhores sensações do mundo é poder ver algo que
          você construiu funcionando redondinho.
        </S.Text>
      </S.Column>
      <S.Column>
        <StaticImage
          src="../../assets/images/me-img.png"
          alt="Imagem do autor do blog esmaecida"
          placeholder="blurred"
          layout="fixed"
          width={180}
        />
        <StaticImage
          src="../../assets/images/polaroid.jpg"
          alt="Imagem polaroid do autor do blog horizontal"
          placeholder="blurred"
          layout="fixed"
          width={140}
        />
        <StaticImage
          src="../../assets/images/old-me.png"
          alt="Imagem do autor do blog quando criança"
          placeholder="blurred"
          layout="fixed"
          width={278}
        />
      </S.Column>
      <S.Row>
        <TechStackBanner technologies={technologies.slice(0, 5)} />
        <TechStackBanner technologies={technologies.slice(6, 16)} reverse />
        <TechStackBanner technologies={technologies.slice(17)} />
      </S.Row>
      <S.Row>
        <S.Text>
          <AnimatedText>Quer entrar em contato?</AnimatedText>
        </S.Text>
        <S.Text>Fica a vontade para dar uma oi nas minhas redes.</S.Text>
        <S.ButtonContainer>
          <S.ActionButton
            href="https://linkedin.com/in/luiz-mariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </S.ActionButton>
          <S.ActionButton
            href="https://github.com/luizmariz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </S.ActionButton>
        </S.ButtonContainer>
      </S.Row>
    </S.Container>
  );
}

export default AuthorInfo;
