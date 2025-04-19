import styled from 'styled-components';

export const Title = styled.span`
  text-transform: uppercase;
  margin: 0;
  padding-left: 1rem;
  font-weight: 800;
  color: #cfdae1;
  font-size: 1.5rem;
  letter-spacing: 0rem;
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 770px) {
    margin-top: 2.5rem;
  }
`;
