import styled from 'styled-components';

export const ContainerTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
`;

export const Anchor = styled.a`
  text-decoration: underline;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.7;
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
  max-width: 60.125rem;
  align-items: start;
  justify-content: start;
  margin: 0 auto;
`;

export const MainRow = styled.footer`
  height: 19vh;
  min-height: 15rem;
  background-color: #202020;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;
