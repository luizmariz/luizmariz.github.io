import styled from 'styled-components';
import background from '../../assets/svgs/intro-background.svg';
import { ActionButtonStyles } from '../../utils/shared.styled';

export const Text = styled.p`
  max-width: 14rem;
  white-space: pre-line;
  font-size: 1.375rem;
  max-width: 28rem;
  margin: 0.5rem 0;
  line-height: 130%;
  font-style: italic;
  margin-bottom: 0.5rem;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:nth-child(1),
  &:nth-child(2) {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  &:nth-child(3) {
    margin-top: 2rem;
  }

  a {
    color: #5cbbab;
    text-decoration: none;
    border-bottom: 2px dotted #5cbbab;
    display: inline;
  }
`;

export const TextBold = styled.b`
  color: #5cbbab;
  font-weight: 800;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  position: relative;

  &:nth-child(3):before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 12, 26, 1) 0%,
      transparent 5%,
      transparent 95%,
      rgba(0, 12, 26, 1) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  &:nth-child(4) {
    margin-top: 0;
  }

  ${Text}:nth-child(1) {
    text-shadow: 0 0 5px rgba(0, 195, 255, 0.5);
  }

  ${Text}:nth-child(2) {
    font-size: 1.375rem;
    text-transform: none;
    font-weight: inherit;
    margin-top: 0;
    opacity: 0.8;
  }
`;

export const Column = styled.div`
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;

  &:nth-child(2) {
    > * {
      position: absolute;
      filter: brightness(0.8);
    }

    > *:nth-child(1) {
      left: 65%;
      top: 4%;
      opacity: 0.5;
      box-shadow: inset 0 0 10px 10px rgba(0, 12, 26, 1);
    }

    > *:nth-child(2) {
      left: 10%;
      z-index: 2;
      border-radius: 0.2rem;
      top: -20%;
      box-shadow: 16px 10px 16px 0px rgba(0, 0, 0, 0.3);
      transform: rotate(90deg);
    }

    > *:nth-child(3) {
      top: 0;
      left: 20%;
      filter: grayscale(0.8) brightness(0.7);
      box-shadow: -10px 10px 4px 0px rgba(0, 0, 0, 0.3);
      position: relative;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 17%;
    bottom: -2%;
    width: 278px;
    height: 100%;
    border: 1px solid #5cbbab;
    background: #ffffff22;
    pointer-events: none;

    opacity: 0.15;
  }

  &:first-child:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    pointer-events: none;
    background-color: color-mix(in srgb, #ffffff 10%, transparent);
    filter: blur(8rem);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  margin-top: 5rem;
  flex-wrap: wrap;

  &:after {
    content: '';
    position: absolute;
    top: -3rem;
    right: -2.6rem;
    width: 23rem;
    height: 18.41rem;
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-position: right;
    opacity: 0.5;
    z-index: -1;
    box-shadow:
      inset -25px 0 10px -5px rgba(0, 12, 26, 0.7),
      inset 0 25px 10px -5px rgba(0, 12, 26, 0.6);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.4rem;
`;

export const ActionButton = styled.a`
  ${ActionButtonStyles}
  padding: 1rem 1rem;
  font-size: 1.2rem;
  line-height: 100%;
  padding-bottom: 2rem;
`;
