import { MdArrowForward } from 'react-icons/md';
import styled from 'styled-components';
import cardBackground from '../../assets/images/card-background.jpg';

export const CallToAction = styled.b`
  color: #5cbbab;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.5rem;
  line-height: 100%;
  flex-grow: 1;
  padding: 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  transition:
    opacity 0.6s,
    transform 0.6s;
  transition-timing-function: cubic-bezier(0.12, 0.62, 0.12, 0.95);
  transition-delay: calc(1 * 0.075s);
  transform: translateY(1.8rem);
  opacity: 0;
  text-transform: uppercase;

  svg {
    font-size: 1.2rem;
  }
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #cfdae1;
  width: 100%;
  height: 20rem;
  padding: 1.5rem;

  &::before {
    content: '';
    background-image: url('${cardBackground}');
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: clip;
    border: 0.0625rem rgba(255, 255, 255, 0.5) solid;
    opacity: 0;
    transition: opacity 275ms ease-in;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover ${CallToAction} {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Time = styled.time`
  font-size: 0.875rem;
  opacity: 0.6;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  line-height: 150%;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 150%;
  margin: 0.5rem 0;
  opacity: 0.6;
`;

export const Tags = styled.p`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background: #5cbbab;
  color: #000000;
  padding: 0rem 0.5rem;
  font-size: 0.8rem;
`;

export const ToLeftBtn = styled(MdArrowForward)`
  color: rgb(var(--text), 0.8);
`;
