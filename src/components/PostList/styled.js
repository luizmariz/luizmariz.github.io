import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Wrapper = styled.div`
  border: 1px solid #99999922;

  &:nth-child(even) {
    border-left: none;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 240%;
  color: #ffffff;
  text-shadow:
    0px 2px 4px rgba(255, 255, 255, 0.03),
    0px 4px 15px rgba(255, 255, 255, 0.15);
`;

export const SectionSubTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-weight: 800;
  opacity: 0.8;
  font-size: 2rem;
  max-width: 29rem;
  font-style: italic;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 1rem;
`;

const TextbackgroundAnimation = keyframes`
 0%,
    100% {
      background-position: 0;
    }

    50% {
      background-position: 100%;
    }
`;

export const AnimatedText = styled.span`
  background: linear-gradient(
    288deg,
    rgb(55, 119, 108),
    rgb(53, 53, 116),
    #5cbbab
  );
  background-size: 200% 200%;
  animation: ${TextbackgroundAnimation} 4s infinite;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
