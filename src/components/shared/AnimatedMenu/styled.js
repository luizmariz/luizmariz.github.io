import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Bar = styled.div`
  width: 100%;
  height: 2px;

  background-color: rgb(var(--text), 0.9);

  ${media.greaterThan("medium")`
    height: 3px;
  `}
`;

export const MenuBarTop = styled(Bar)``;

export const MenuBarMiddle = styled(Bar)`
  margin: 3px 0;
`;

export const MenuBarBottom = styled(Bar)``;

export const Container = styled.div`
  display: flex;
  width: 1.9rem;
  height: 1.7rem;
  padding: 0.2rem 0.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: rotate(${props => (props.active ? '45deg' : '0')});

  ${props =>
    props.active
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
      : ''}

  &,
  * {
    transition: margin 0.2s ease-in-out, opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  ${media.greaterThan("medium")`
    width: 2rem;

    &:hover {
      cursor: pointer;

      * {
        transition: margin 0.2s ease-in-out, opacity 0.2s ease-in-out,
          transform 0.2s ease-in-out;
      }

      ${MenuBarMiddle} {
        margin: -3px 0;
        opacity: 0;
      }

      ${MenuBarBottom} {
        transform: rotate(90deg);
      }
    }
  `}
`;
