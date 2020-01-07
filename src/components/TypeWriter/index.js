import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import * as S from './styled';

function TypeWriter({ value }) {
  const [text, setText] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true });

  const typeWriter = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    if (inView) {
      typeWriter(value);
    }
  }, [inView]);

  return (
    <S.Container ref={ref}>
      {text}
      <S.TextCursor />
    </S.Container>
  );
}

TypeWriter.propTypes = {
  value: PropTypes.string.isRequired
};

export default TypeWriter;
