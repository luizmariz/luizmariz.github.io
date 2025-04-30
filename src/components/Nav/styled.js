import { Link } from 'gatsby';
import { MdArrowUpward } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { turnOn } from '../../utils/shared.styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: block;
  width: 100vw;
  background: rgba(0, 10, 22, 0.65);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #99999922;
  padding-right: var(--scrollbar-width);
  transform: translateY(-100%);
  transition:
    all 275ms ease-out,
    background-color 275ms ease-in;

  @media (max-width: 1023px) {
    transform: translateY(0);
  }

  ${(props) =>
    props.show &&
    css`
      transform: translateY(0);
    `}
`;

export const NavLink = styled(Link)`
  color: #ffffff99;
  font-size: 0.875rem;
  padding: 0.1rem 0.5rem;
  transition: color 375ms ease;

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
  padding: 1.5rem; 1.5rem;
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

  &:last-child > :last-child {
    display: none;
  }

  @media (max-width: 1023px) {
    min-width: 0;

    &:nth-child(2) {
      display: none;
    }

    &:last-child {
      gap: 1.5rem;
    }

    &:last-child > :last-child {
      display: flex;
    }
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

  @media (max-width: 1023px) {
    display: none;
  }
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

export const MobileContainer = styled.nav`
  position: fixed;
  top: 4rem;
  width: 100vw;
  z-index: 99998;
  height: 4rem;
  background: rgba(0, 10, 22, 0.9);
  backdrop-filter: blur(5px);
  border-top: 1px solid #99999922;
  border-bottom: 1px solid #99999922;
  padding: 0 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transform: translateY(-200%);
  transition:
    all 375ms ease-out,
    background-color 375ms ease-in;

  ${NavLinkWrapper} {
    text-align: end;
    margin: 1rem 0;
    display: inline-block;
  }

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      transform: translateY(0);
    `}
`;
