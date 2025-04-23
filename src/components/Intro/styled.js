import styled from 'styled-components';
import background from '../../assets/svgs/intro-background.svg';

export const Text = styled.p`
  max-width: 14rem;
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
    padding-top: 2.5rem;
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
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  margin-bottom: 12rem;
  margin-top: 5rem;

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

export const MoneyGif = styled.img`
  display: inline-flex;
  height: 1.6rem;
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  left: -4rem;
  bottom: -6.5rem;
`;

export const ConnectButton = styled.a`
  display: inline;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
  padding-top: 1.25rem;
  padding-right: 1.75rem;
  outline: 0;
  border: 1px solid #99999933;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: rgb(207, 218, 225);
  text-decoration: none;
  width: fit-content;
  margin-left: 0.25rem;
  margin-top: 2rem;
  transition: 0.2s;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 100%;
  height: 3.125rem;

  &:after {
    content: '';
    background-color: #2a3177;
    width: 100%;
    z-index: -2;
    position: absolute;
    height: 100%;
    top: 0.25rem;
    right: 0.25rem;
    transition: 0.2s;
    opacity: 0.5;
  }

  &:hover {
    margin-left: 0;
    border-color: #99999988;
    padding-top: 1.15rem;
    padding-right: 1.65rem;
  }

  &:hover:after {
    top: 0px;
    right: 0px;
    opacity: 0.7;
  }
`;
