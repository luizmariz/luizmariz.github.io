import styled from 'styled-components';
import Img from 'gatsby-image';

export const Logo = styled(Img)`
  width: 70px;
  /* Oops */
  margin-left: -0.4rem;
  margin-right: 2px;
`;

export const BlogTitle = styled.div`
  display: flex;
  margin-left: 0.2rem;

  text-transform: uppercase;

  /* TODO: refact it */
  h1 {
    margin: 0;

    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    display: none;
    margin: 0;
    width: 0;
    height: 0;

    font-size: 1.5rem;
    color: var(--primary);
    font-weight: 600;

    -webkit-tap-highlight-color: transparent;
  }
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
