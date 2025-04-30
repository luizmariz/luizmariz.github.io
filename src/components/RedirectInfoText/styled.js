import { Link } from 'gatsby';
import styled from 'styled-components';
import background from '../../assets/svgs/post-background.svg';
import { ActionButtonStyles } from '../../utils/shared.styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 4rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;

    left: -3.5rem;
    width: 144.5%;
    height: 140%;
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 40px 40px rgba(0, 12, 26, 1);
    opacity: 0.3;
    z-index: -1;
  }
`;

export const StyledLink = styled(Link)`
  ${ActionButtonStyles}
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 1.375rem;
  font-style: italic;
  max-width: 26rem;
  line-height: 120%;
  margin-bottom: 3rem;
`;
