import styled, { css } from 'styled-components';

const bar = css`
  width: 100%;
  height: 3px;
  background-color: rgb(var(--text), .9);

  @media (max-width: 770px) {
    height: 2px;
  }
`;

export const MenuBarTop = styled.div`
  ${bar}
`;

export const MenuBarMiddle = styled.div`
  ${bar}
  margin: 3px 0;
`;

export const MenuBarBottom = styled.div`
  ${bar}
`;

export const Container = styled.div`
  width: 2rem;
  height: 1.7rem;
  padding: .2rem .25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(${props => props.active ? '45deg' : '0'});
  transition: margin .2s ease-in-out, opacity .2s ease-in-out,
  transform .2s ease-in-out;

  ${ props => props.active
    ? css`
      ${MenuBarMiddle} {
        margin: -3px 0;
        opacity: 0;

        @media (max-width: 770px) {
          margin: -2px;
        }
      }

      ${MenuBarBottom} {
        transform: rotate(90deg);
      }
    `
    : ''
  }

  @media (min-width: 770px) {
    &:hover {
      cursor: pointer;

      * {
        transition: margin .2s ease-in-out, opacity .2s ease-in-out,
        transform .2s ease-in-out;
      }

      ${MenuBarMiddle} {
        margin: -3px 0;
        opacity: 0;
      }

      ${MenuBarBottom} {
        transform: rotate(90deg);
      }
    }
  }

  @media (max-width: 770px) {
    width: 1.9rem;
  }

  * {
    transition: margin .2s ease-in-out, opacity .2s ease-in-out,
    transform .2s ease-in-out;
  }
`;
