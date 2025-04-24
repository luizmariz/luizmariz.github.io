import { Link } from 'gatsby';
import { MdArrowUpward } from 'react-icons/md';
import styled, { css, keyframes } from 'styled-components';

export const turnOn = keyframes`
  0% {
    opacity: 0.6;
  }
  10% {
    opacity: .4;
  }
    20% {
    opacity: 0.7;
  }
  40% {
    opacity: 0.5;
  }
    50% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: block;
  width: 100vw;
  overflow: visible;
  background: rgba(0, 10, 22, 0.65);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #99999922;
  padding-right: var(--scrollbar-width);

  ${(props) =>
    props.show
      ? css`
          visibility: visible;
          transition:
            all 0.25s ease-out,
            background-color 0.2s ease-in;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          transition:
            all 0.25s ease-in,
            background-color 0.2s ease-in;
          transform: translateY(-100%);
        `}
`;

export const NavLink = styled(Link)`
  color: #ffffff99;
  font-size: 0.875rem;
  padding: 0.1rem 0.5rem;
  transition: color 250ms ease;

  &:hover {
    color: #ffffff;
  }
`;

export const NavLinkWrapper = styled.div`
  position: relative;

  ${(props) =>
    props.selected
      ? css`
          &:before,
          &:after {
            z-index: -1;
            content: '';
            position: absolute;
            top: -1.6rem;
            left: 10%;
            background-color: color-mix(in srgb, #ffffff 10%, transparent);
            width: 80%;
            height: 140%;
            pointer-events: none;
            filter: blur(12px);
            animation: ${turnOn} 2s ease-in-out forwards;
          }

          &:before {
            top: -1.6rem;
            left: 25%;
            width: 50%;
            height: 50%;
          }

          ${NavLink} {
            opacity: 1;
            background: #ffffff11;
            position: relative;

            &:after {
              content: '';
              position: absolute;
              width: calc(100% - 1rem);
              top: -1.1rem;
              left: 0.5rem;
              height: 0.2rem;
              background: #ffffff;
            }
          }
        `
      : css``};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem; 1.5rem;;
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  min-width: 10rem;

  &:first-child {
    justify-content: start;
  }

  &:nth-child(2) {
    flex-grow: 1;
  }

  &:last-child {
    justify-content: end;
  }
`;

export const ToTopBtn = styled(MdArrowUpward)`
  color: rgb(255, 255, 255);
  font-size: 1.4rem;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  text-transform: uppercase;
  margin: 0;
  padding-left: 0.675rem;
  font-weight: 800;
  color: #cfdae1;
  font-size: 1rem;
  letter-spacing: 0rem;
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: 0.5;
  animation: ${turnOn} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`;
