import { css } from 'styled-components';

export const ActionButtonStyles = css`
  display: inline-block;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
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
  transition: 0.2s;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 150%;
  height: 3rem;

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
    border-color: #99999988;
  }

  &:hover:after {
    opacity: 0.7;
  }
`;
