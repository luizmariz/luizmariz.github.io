import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { MdFavorite } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1.3rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MainRow = styled.section`
  min-height: 16vh;

  background-color: var(--footer);
  border-top: 1px solid #99999922;
`;

export const BonusRow = styled(MainRow)`
  min-height: 4vh;
  margin-bottom: 3.5rem;

  font-size: 0.9rem;
  border-top: 1px solid #99999922;

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}

  ${Wrapper} {
    padding: 0.5rem 1.3rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Hearth = styled(MdFavorite)`
  margin-left: 0.5rem;
  color: rgba(var(--heart));
`;

export const Row = styled.div`
  display: flex;
  margin-top: 1.1rem;
  flex-direction: row;
`;

export const Anchor = styled.a`
  border-bottom: none;

  &:hover {
    border-bottom: none;
  }

  &::before {
    content: none !important;
  }
`;

const BtnCommonCss = css`
  padding: 7px;
  margin-right: 1rem;

  font-size: 2.6rem;
  color: var(--icon);

  cursor: pointer;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 5px;
  transition: border 0.1s ease-in;

  &:hover {
    transition: border 0.1s ease-in;
    border: 1px solid rgba(var(--text), 0.5);
  }
`;

export const Github = styled(DiGithubBadge)`
  ${BtnCommonCss}

  padding: 3px;
`;

export const Linkedin = styled(FaLinkedin)`
  ${BtnCommonCss}
`;

export const Twitter = styled(FaTwitter)`
  ${BtnCommonCss}
`;
