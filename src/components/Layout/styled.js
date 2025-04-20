import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem 1.2rem;
  max-width: 64rem;
`;

export const PageContent = styled.div`
  margin-top: 2.5rem;
`;

export const MainWrapper = styled.div`
  position: relative;
  background: #000c1a;
  color: #cfdae1;
  border-bottom: 1px solid #99999910;
  z-index: 9999;
  margin-bottom: max(25vh, 20rem);
  min-height: 100vh;
`;

export const VerticalText = styled.div`
  font-weight: 800;
  font-size: 7rem;
  opacity: 0.025;
  line-height: 120%;
  position: absolute;
  top: 0;
  left: 0.5rem;
  width: 100%;
`;
