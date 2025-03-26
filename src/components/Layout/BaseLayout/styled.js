import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 2.6rem 1.3rem;
  max-width: 42rem;
  min-height: 80vh;
`;

export const PageContent = styled.div`
  margin-top: 2.5rem;
`;

export const MainWrapper = styled.div`
  position: relative;
  background: linear-gradient(to bottom, #13244d 36%, #001f3f);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 9999;
  margin-bottom: max(19vh, 15rem);
  min-height: 100vh;
`;
