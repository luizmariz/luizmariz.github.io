import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { MdArrowUpward } from 'react-icons/md';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: block;
  width: 100vw;
  overflow: visible;
  background: #000c1ab5;
  backdrop-filter: blur(4px);
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
  ${media.lessThan('medium')`
    display: none;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  max-width: 64rem;
  min-width: 64rem;
  margin: 0 auto;
  padding: 1.2rem 1.3rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ToTopBtn = styled(MdArrowUpward)`
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
`;
