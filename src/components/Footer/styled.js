import styled from 'styled-components';
import { Anchor } from '../../utils/anchor.styled';

export const ContainerTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  opacity: 0.9;
`;

export const Link = styled(Anchor)`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  font-weight: 200;
  opacity: 0.8;
  display: block;
  cursor: pointer;
  color: inherit;

  &:visited {
    color: inherit;
    opacity: 0.5;
  }

  &:hover {
    color: #5cbbab;
    text-decoration: underline;
  }
`;

export const BasicLink = styled(Anchor)``;

export const AuxiliarText = styled.span`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 200;
  opacity: 0.5;
  display: block;
`;

export const Container = styled.section`
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 64rem;
  align-items: start;
  justify-content: start;
  margin: 0 auto;
  padding: 0 1.2rem;
  max-width: 64rem;
  min-width: 64rem;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 75%;
  gap: 5rem;
`;

export const MainRow = styled.footer`
  height: 25vh;
  min-height: 20rem;
  background: #000a15;
  color: #cfdae1;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InnerRow = styled.div`
  width: 100%;
  height: 25%;
  background: #000308;
`;

export const InnerRowContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.2rem;
  max-width: 64rem;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 0.765rem;
  height: 100%;
  opacity: 0.5;
`;

export const Title = styled.span`
  text-transform: uppercase;
  margin: 0;
  padding-left: 0.675rem;
  font-weight: 800;
  color: #cfdae1;
  font-size: 1rem;
  letter-spacing: 0rem;
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const NewsletterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const NewsletterTextTitle = styled(NewsletterText)`
  font-weight: 800;
  opacity: 1;
`;

export const NewsletterBtn = styled(Anchor)`
  line-height: 1.5rem;
  text-decoration: none;
  color: #5cbbab;
  font-weight: 600;
  border: 1px solid #5cbbab;
  padding: 0.5rem 1rem;
  opacity: 0.5;
  display: inline-flex;
  font-size: 0.9rem;
  margin-top: 1rem;

  &:hover {
    opacity: 1;
  }
`;
