import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import me from '../../assets/images/me.png';

export const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const ProfileCardContainer = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: -16px 10px 16px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: white;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  overflow: hidden;
  font-weight: 200;

  &:after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 160px;
    height: 160px;
    background-image: url('${me}');
    background-size: cover;
    z-index: -1;
    opacity: 0;
    transition:
      opacity 500ms,
      transform 875ms;
    transition-timing-function: cubic-bezier(0.12, 0.62, 0.12, 0.95);
    transition-delay: calc(1 * 0.075s);
    transform: translateX(100%) translateY(-100%);
  }

  &:hover:after {
    opacity: 0.4;
    transform: translateX(0) translateY(0);
  }
`;

export const ProfileImage = styled.img`
  outline: 1px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
  border-radius: 50%;
  margin-left: 2px;
  margin-top: 2px;
  float: left;
`;

export const ProfileHeader = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 0.75rem;
  align-items: center;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 195, 255, 0.5);
`;

export const Title = styled.p`
  color: #cfdae1;
  font-size: 0.875rem;
  line-height: 1;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  color: #cfdae1;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  display: inline-flex;
  float: right;
  line-height: 1;
  color: #5cbbab;
  opacity: 0.5;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0.25rem 0.5rem;

  &:hover {
    opacity: 1;
    background: #5cbbab11;
  }
`;
