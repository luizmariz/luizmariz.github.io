import React from 'react';
import * as SiIcons from 'react-icons/si';
import Carousel from '../Carrousel';

import * as S from './styled';

function TechStackBanner({ technologies = [], reverse = false }) {
  const items = technologies.map((tech, index) => {
    const IconComponent = SiIcons[tech.icon];
    return (
      <S.TechTag
        color={tech.color}
        key={`tech-${tech.icon.toLowerCase()}-${index}`}
      >
        <IconComponent />
        {tech.name && <span>{tech.name}</span>}
      </S.TechTag>
    );
  });

  return (
    <S.Container>
      <Carousel
        items={items}
        reverse={reverse}
        duration={items.length * 15}
      ></Carousel>
    </S.Container>
  );
}

export default TechStackBanner;
