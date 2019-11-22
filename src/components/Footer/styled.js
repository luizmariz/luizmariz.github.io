import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.5rem 1.3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const MainRow = styled.section`
  background-color: var(--footer);
  min-height: 16vh;
`;

export const BonusRow = styled(MainRow)`
  border-top: 1px solid var(--bg);
  font-size: 0.9rem;
  min-height: 4vh;

  ${Wrapper} {
    padding: 0.5rem 1.3rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Hearth = styled(MdFavorite)`
  color: rgba(var(--heart));
  margin-left: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.1rem;
`;

// TODO: change to styled-icons
export const Github = styled(DiGithubBadge)`
  color: rgb(var(--text));
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  padding: 3px;
  transition: border 0.1s ease-in;

  &:hover {
    border: 1px solid rgba(var(--text), 0.5);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  color: rgb(var(--text));
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  padding: 7px;
  margin-right: 1rem;
  transition: border 0.1s ease-in;

  &:hover {
    border: 1px solid rgba(var(--text), 0.5);
  }
`;

export const Anchor = styled.a`
  border-bottom: none;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: none !important;
  }
`;
