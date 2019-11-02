import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';

export const MainRow = styled.section`
  background-color: var(--footer);

  & div {
    margin: 0 auto;
    max-width: 42rem;
    padding: 2.6rem 1.3rem;
  }
`;

export const BonusRow = styled(MainRow)`
  margin-top: 1px;
  font-size: 0.8rem;
  & div {
    padding: 0.6rem 1.3rem;
    display: flex;
    align-items: center;
  }
`;

export const Hearth = styled(MdFavorite)`
  color: rgba(var(--heart));
  margin-left: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  /* Oops 🙃 */
  margin-top: 1.1rem !important;
  padding: 0 0 !important;
`;

export const Github = styled(DiGithubBadge)`
  color: rgb(var(--text));
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid rgba(var(--text), .2);
  border-radius: 5px;
  padding: 3px;
  transition: border 0.1s ease-in;

  &:hover {
    border: 1px solid rgba(var(--text), .5);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  color: rgb(var(--text));
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid rgba(var(--text), .2);
  border-radius: 5px;
  padding: 7px;
  margin-right: 1rem;
  transition: border 0.1s ease-in;

  &:hover {
    border: 1px solid rgba(var(--text), .5);
  }
`;
