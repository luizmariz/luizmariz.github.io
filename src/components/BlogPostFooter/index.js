import PropTypes from 'prop-types';
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Anchor } from '../../utils/anchor.styled';
import Bio from '../Bio';
import * as S from './styled';

function Footer({ previous, next }) {
  return (
    <aside>
      <nav>
        <S.BlogIndex>
          <Anchor to="/">luiz ipsum</Anchor>
        </S.BlogIndex>
        <Bio />
        <S.PostNav>
          {previous && (
            <S.Previous>
              <S.StyledLink to={previous.fields.slug} rel="prev">
                <MdArrowBack />
                {previous.frontmatter.title}
              </S.StyledLink>
            </S.Previous>
          )}
          {next && (
            <S.Next>
              <S.StyledLink to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                <MdArrowForward />
              </S.StyledLink>
            </S.Next>
          )}
        </S.PostNav>
      </nav>
    </aside>
  );
}

Footer.propTypes = {
  previous: PropTypes.any,
  next: PropTypes.any
};

export default Footer;
