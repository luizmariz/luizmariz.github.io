import styled from 'styled-components';

export const ContainerTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  opacity: 0.9;
`;

export const Anchor = styled.a`
  text-decoration: underline;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.8;
  display: block;
  cursor: pointer;
  color: inherit;

  &:visited {
    color: inherit;
    opacity: 0.5;
  }
`;

export const AuxiliarText = styled.span`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.5;
  display: block;
`;

export const Container = styled.section`
  display: block;
  margin-right: 6.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 64rem;
  align-items: start;
  justify-content: start;
  margin: 0 auto;
  padding: 0 1.3rem;
  max-width: 64rem;
  min-width: 64rem;
`;

export const MainRow = styled.footer`
  height: 19vh;
  min-height: 15rem;
  background: linear-gradient(to bottom, #0a121f 10%, #000308);
  color: #cfdae1;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;
