import { Link } from 'gatsby';
import styled from 'styled-components';
import background from '../../assets/svgs/ovni.svg';
import { ActionButtonStyles } from '../../utils/shared.styled';

export const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  height: calc(100vh - 16rem);
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  padding-bottom: 3.5rem;
  padding-top: 22%;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 52rem;
    height: 100%;
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
  }

  @media (max-width: 1023px) {
    margin: 0;
    width: 100%;
    padding-top: 8rem;

    &:after {
      width: 100%;
      left: 1.5rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  ${ActionButtonStyles}
  margin-left: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  text-shadow: 0 0 5px rgba(0, 195, 255, 0.5);
  line-height: 100%;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.375rem;
  font-style: italic;
  max-width: 26rem;
  line-height: 120%;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
`;
