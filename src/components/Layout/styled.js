import styled from 'styled-components';

export const Title = styled.span`
  text-transform: uppercase;
  margin: 0;
  padding-left: 1rem;
  font-weight: bold;
  color: #cfdae1;
  font-size: 1.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .anchor:hover {
    opacity: 1;
  }

  @media (min-width: 770px) {
    margin-top: 3.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  min-height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
