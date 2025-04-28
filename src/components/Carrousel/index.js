import React from 'react';
import * as S from './styled';

function Carousel({ items, duration = 40, vertical = false, reverse = false }) {
  const [animationState, setAnimationState] = React.useState('running');
  const [copies, setNumberOfCopies] = React.useState(1);

  const containerRef = React.useRef(null);
  const trackRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const containerSize = vertical
      ? containerRef.current.clientHeight
      : containerRef.current.clientWidth;

    const itemsSize = vertical
      ? trackRef.current?.clientHeight
      : trackRef.current?.clientWidth;

    if (!itemsSize) {
      return;
    }

    const copiesNeeded = Math.ceil(containerSize / itemsSize) * 2;

    setNumberOfCopies(Math.max(2, copiesNeeded));
  }, [items, vertical]);

  const carouselItems = React.useMemo(() => {
    return Array(copies)
      .fill()
      .flatMap((_, i) =>
        items.map((item, j) => (
          <S.CarouselItem key={`carousel-item-${i}-${j}`}>
            {item}
          </S.CarouselItem>
        ))
      );
  }, [items, copies]);

  return (
    <S.CarouselContainer
      ref={containerRef}
      vertical={vertical}
      onMouseEnter={() => setAnimationState('paused')}
      onMouseLeave={() => setAnimationState('running')}
    >
      <S.CarouselTrack
        ref={trackRef}
        animationstate={animationState}
        vertical={vertical}
        reverse={reverse}
        duration={`${duration}s`}
      >
        {carouselItems}
      </S.CarouselTrack>
    </S.CarouselContainer>
  );
}

export default Carousel;
