import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { ActionButtonStyles } from '../../utils/shared.styled';

export const ContainerTitle = styled.h5`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
  opacity: 0.25;

  @media (max-width: 1023px) {
    opacity: 0.9;
    text-shadow:
      0px 2px 4px rgba(255, 255, 255, 0.03),
      0px 4px 15px rgba(255, 255, 255, 0.15);
  }
`;

export const ActionButton = styled(Link)`
  ${ActionButtonStyles}
  margin-top: 1rem;
`;

const LinkStyles = css`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  font-weight: 200;
  opacity: 0.8;
  display: block;
  cursor: pointer;
  color: inherit;
  color: #cfdae1;

  &:visited {
    color: inherit;
    opacity: 0.5;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const BasicLinkStyles = css`
  color: #cfdae1;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  ${LinkStyles}
`;

export const AnchorStyledLink = styled.a`
  ${LinkStyles}
`;

export const BasicLink = styled(Link)`
  ${BasicLinkStyles}
`;

export const AnchorBasicLink = styled.a`
  ${BasicLinkStyles}
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

  &:first-child {
    margin-right: 1.5rem;
  }

  &:hover ${ContainerTitle} {
    opacity: 0.9;
    text-shadow:
      0px 2px 4px rgba(255, 255, 255, 0.03),
      0px 4px 15px rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 1023px) {
    &:first-child {
      width: 100%;
    }

    &:nth-child(2) {
      margin-right: 5rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 64rem;
  align-items: start;
  justify-content: start;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 64rem;
  min-width: 64rem;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 75%;
  flex-wrap: wrap;
  gap: 5rem;

  @media (max-width: 1023px) {
    min-width: 100%;
    max-width: 100%;
    height: 22rem;
    gap: 0;
  }
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
  align-items: end;

  @media (max-width: 1023px) {
    height: 27rem;
    flex-direction: row;
    flex-wrap: wrap;
    position: static;
    bottom: unset;
  }
`;

export const InnerRow = styled.div`
  width: 100%;
  height: 25%;
  background: #000308;
  border-top: 1px solid #99999910;

  @media (max-width: 1023px) {
    height: 5rem;
  }
`;

export const InnerRowContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 64rem;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 0.765rem;
  height: 100%;
  opacity: 0.5;
  line-height: 120%;
`;

export const Title = styled.span`
  text-transform: uppercase;
  margin: 0;
  padding-left: 0.675rem;
  font-weight: 800;
  color: #cfdae1;
  font-size: 1rem;
  letter-spacing: 0rem;
  text-shadow:
    0px 2px 4px rgba(255, 255, 255, 0.03),
    0px 4px 15px rgba(255, 255, 255, 0.15);
`;

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

export const NewsletterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 200;
`;

export const NewsletterTextTitle = styled(NewsletterText)`
  font-weight: 600;
  opacity: 1;
`;

export const NewsletterBtn = styled(Link)`
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
