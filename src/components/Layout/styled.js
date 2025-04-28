import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 4rem 1.5rem;
  max-width: 64rem;

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: -16.5rem;
    left: 0;
    width: 100%;
    height: 18rem;
    border-radius: 50%;
    pointer-events: none;
    background-color: color-mix(in srgb, #ffffff 5%, transparent);
    filter: blur(32px);
  }
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
  contain: paint;
`;

export const VerticalText = styled.div`
  font-weight: 800;
  font-size: 7rem;
  opacity: 0.03;
  line-height: 120%;
  position: absolute;
  top: 0;
  left: 0.4rem;
  text-transform: uppercase;
  height: 100%;
`;
