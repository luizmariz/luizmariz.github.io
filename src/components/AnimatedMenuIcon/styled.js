import styled, { css } from 'styled-components';

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ffffff66;
`;

export const MenuBarTop = styled(Bar)``;

export const MenuBarMiddle = styled(Bar)`
  margin: 3px 0;
`;

export const MenuBarBottom = styled(Bar)``;

export const Container = styled.div`
  display: flex;
  min-width: 1.7rem;
  min-height: 1.7rem;
  padding: 0.2rem 0.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: rotate(${(props) => (props.active ? '45deg' : '0')});

  ${(props) =>
    props.active
      ? css`
          ${MenuBarMiddle} {
            margin: -2px;
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
    transition:
      margin 0.2s ease-in-out,
      opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }
`;
