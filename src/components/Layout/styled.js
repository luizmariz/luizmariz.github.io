import styled from 'styled-components';
import ToggleBtn from '../../components/shared/ToggleBtn';
import Img from 'gatsby-image';

export const Logo = styled(Img)`
  width: 70px;
  /* Oops */
  margin-left: -0.4rem;
  margin-right: 2px;
`;

export const BlogTitle = styled.div`
  margin-left: 0.2rem;
  text-transform: uppercase;
  display: flex;

  h1 {
    margin: 0;
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    width: 0;
    height: 0;
    display: none;
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
  margin-top: 2.6rem;

  .anchor:hover {
    opacity: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
`;

export const ResponsiveToggleBtn = styled(ToggleBtn)`
  @media (max-width: 672px) {
    display: none;
  }
`;
