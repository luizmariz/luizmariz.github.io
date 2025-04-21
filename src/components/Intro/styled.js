import styled from 'styled-components';
import background from '../../assets/svgs/intro-background.svg';

export const Text = styled.p`
  max-width: 14rem;
  white-space: pre-line;
  font-size: 1.2rem;
  max-width: 28rem;
  margin: 0.5rem 0;
  line-height: 150%;
`;

export const TextBold = styled.b`
  color: #5cbbab;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    align-items: end;
    flex-grow: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  margin-bottom: 4rem;

  &:after {
    content: '';
    position: absolute;
    top: -2rem;
    right: -2.7rem;
    width: 100%;
    height: 100%;
    background-image: url('${background}');
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const MoneyGif = styled.img`
  display: inline-flex;
  height: 2rem;
`;
