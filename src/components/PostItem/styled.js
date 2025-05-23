import { Link } from 'gatsby';
import { MdArrowForward } from 'react-icons/md';
import styled, { css } from 'styled-components';
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
    opacity 200ms,
    transform 200ms;
  transition-timing-function: cubic-bezier(0.12, 0.62, 0.12, 0.95);
  transition-delay: calc(1 * 0.075s);
  transform: translateX(-0.8rem);
  opacity: 0;
  text-transform: uppercase;
  position: absolute;
  bottom: 1.6rem;
  right: 1.6rem;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 1023px) {
    opacity: 0.8;
    right: 0.5rem;

    svg {
      font-size: 1.05rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 130%;
  padding: 0;
  margin: 0;
  padding-top: 0.25rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

export const Time = styled.time`
  font-size: 0.875rem;
  font-weight: 200;
  opacity: 0.5;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 130%;
  margin: 0;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  font-weight: 200;
`;

export const StyledLink = styled(Link)`
  display: flex;
`;

const ContainerAnimation = css`
  &:before {
    opacity: 1;
  }

  ${CallToAction} {
    transform: translateY(0);
    opacity: 0.8;

    background-repeat: no-repeat;
  }

  ${Title} {
    transform: translateY(0);
    opacity: 1;
  }

  ${Description}, ${Time} {
    opacity: 0.8;
  }

  transform: translateX(2.5%) translateY(-5%);
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #cfdae1;
  width: 100%;
  height: 16rem;
  padding: 1rem 1.5rem;
  transition: transform 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:before {
    content: '';
    background:
      linear-gradient(rgba(42, 49, 119, 0.3), rgba(0, 0, 10, 0.3)),
      url('${cardBackground}');
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: clip;
    border: 0.0625rem rgba(255, 255, 255, 0.4) solid;
    background-size: cover;

    opacity: 0;
    transition: opacity 180ms ease-in;
    z-index: -1;
  }

  @media (min-width: 1024px) {
    &:hover {
      ${ContainerAnimation}
    }
  }

  @media (max-width: 1023px) {
    & > * {
      z-index: 2;
    }

    &:before {
      opacity: 0.3;
      z-index: 1;
      border: none;
    }

    ${(props) => props.$active && ContainerAnimation}
  }
`;

export const Tags = styled.p`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
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
