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
  position: relative;
  width: 50%;

  &:last-child {
    align-items: end;
    flex-grow: 1;
    padding-right: 1rem;
  }

  &:last-child:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 4rem;
    left: -8rem;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    pointer-events: false;
    background-color: color-mix(in srgb, #ffffff 10%, transparent);
    filter: blur(8rem);
  }

  &:first-child {
    padding-top: 1rem;
    padding-left: 1rem;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  margin-bottom: 14rem;
  margin-top: 5rem;

  &:after {
    content: '';
    position: absolute;
    top: -4rem;
    right: -2.4rem;
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
  height: 1.6rem;
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  left: -4rem;
  bottom: -9rem;
`;

export const ConnectButton = styled.a`
  color: #ffffff;
  padding: 1rem 1.5rem;
  text-decoration: none;
  background: #2a3177;
  display: inline-block;
  width: fit-content;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.7;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;
