import styled from 'styled-components';
import background from '../../assets/svgs/intro-background.svg';
import { ActionButtonStyles } from '../../utils/shared.styled';

export const Text = styled.p`
  white-space: pre-line;
  font-size: 1.375rem;
  max-width: 28rem;
  margin: 0.5rem 0;
  line-height: 130%;
  font-style: italic;
  margin-bottom: 0.5rem;

  &:nth-child(1),
  &:nth-child(2) {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  &:last-of-type {
    margin-top: 1rem;
  }

  &:first-of-type {
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TextBold = styled.b`
  color: #5cbbab;
  font-weight: 800;
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
    pointer-events: none;
    background-color: color-mix(in srgb, #ffffff 10%, transparent);
    filter: blur(8rem);
  }

  @media (max-width: 1023px) {
    width: 100%;

    &:last-child {
      min-height: 21rem;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  margin-bottom: 10rem;
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

  @media (max-width: 1023px) {
    margin-top: 0;
    margin-bottom: 13rem;

    &:after {
      right: -3.3rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  left: -4rem;
  bottom: -6.5rem;

  @media (max-width: 1023px) {
    left: 0;
    bottom: -9rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CodeEditorWrapper = styled.div`
  position: static;

  @media (max-width: 1023px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const ActionButton = styled.a`
  ${ActionButtonStyles}
  margin-top: 1.4rem;
`;
