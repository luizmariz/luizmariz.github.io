import React from 'react';
import * as S from './styled';

function Carousel({ items, height, duration = 10 }) {
  const [animationState, setAnimationState] = React.useState('running');

  return (
    <S.CarouselContainer
      height={height}
      onMouseEnter={() => setAnimationState('paused')}
      onMouseLeave={() => setAnimationState('running')}
    >
      <S.CarouselTrack
        animationstate={animationState}
        duration={`${duration}s`}
      >
        {[...items, ...items].map((item, index) => (
          <S.CarouselItem key={`carousel-item-${index}`}>{item}</S.CarouselItem>
        ))}
      </S.CarouselTrack>
    </S.CarouselContainer>
  );
}

export default Carousel;
