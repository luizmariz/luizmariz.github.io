import PropTypes from 'prop-types';
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import * as S from './styled';

function BlogPostFooter({ previous, next }) {
  return (
    <S.PostFooterContainer>
      <h2>Mais artigos 🛸</h2>
      <S.PostNav>
        {previous && (
          <S.Previous to={previous.fields.slug} rel="prev">
            <MdArrowBack />
            {previous.frontmatter.title}
          </S.Previous>
        )}
        {next && (
          <S.Next to={next.fields.slug} rel="next">
            {next.frontmatter.title}
            <MdArrowForward />
          </S.Next>
        )}
      </S.PostNav>
    </S.PostFooterContainer>
  );
}

BlogPostFooter.propTypes = {
  previous: PropTypes.any,
  next: PropTypes.any
};

export default BlogPostFooter;
