import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    width: calc(100vw);
    margin-left: -1.5rem;
    gap: 0;
    background: #000c1a;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid #99999933;

  @media (max-width: 1023px) {
    &:not(:last-child) {
      border: none;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  text-shadow:
    0px 2px 4px rgba(255, 255, 255, 0.03),
    0px 4px 15px rgba(255, 255, 255, 0.15);
`;

export const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 1rem;
`;
