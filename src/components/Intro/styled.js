import styled from 'styled-components';
import background from '../../assets/svgs/intro-background.svg';

export const Text = styled.p`
  max-width: 14rem;
  white-space: pre-line;
  font-size: 1.2rem;
  max-width: 28rem;
  margin-block: 0.5rem;
`;

export const TextBold = styled.b`
  color: #5cbbab;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 4rem 1.5rem;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${background}');
    background-size: cover;
    opacity: 0.15;
    z-index: -1;
  }
`;

export const MoneyGif = styled.img`
  display: inline-flex;
  height: 2rem;
`;
