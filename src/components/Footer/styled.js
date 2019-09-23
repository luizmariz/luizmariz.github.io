import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';

export const MainRow = styled.section`
  background-color: ${props => props.theme.footer.concat('55')};

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
  color: ${props => props.theme.hearth};
  margin-left: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  /* Oops 🙃 */
  margin-top: 1.1rem !important;
  padding: 0 0 !important;
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-family: 'Fira Code Bold';
  color: ${props => props.theme.secondary};
`;

export const Github = styled(DiGithubBadge)`
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid ${props => props.theme.text.concat('33')};
  border-radius: 5px;
  padding: 3px;

  &:hover {
    opacity: .6;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 2.6rem;
  border: 1px solid ${props => props.theme.text.concat('33')};
  border-radius: 5px;
  padding: 7px;
  margin-right: 1rem;

  &:hover {
    opacity: .6;
  }
`;