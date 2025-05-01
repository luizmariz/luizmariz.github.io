import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0.25rem 0;
`;

export const TechTag = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.$color || '#000'};
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(10px);
  z-index: -1;

  span {
    display: block;
    margin-left: 0.4rem;
    font-size: 0.875rem;
    line-height: 0.875rem;
  }

  svg {
    font-size: 0.9rem;
  }
`;
