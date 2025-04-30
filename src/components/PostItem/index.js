import PropTypes from 'prop-types';
import React from 'react';
import { formatTimestamp } from '../../utils/helpers';

import * as S from './styled';

function PostItem({ date, readingTime, slug, tags, title, summary, active }) {
  return (
    <S.StyledLink to={slug} rel="bookmark">
      <S.Container active={active}>
        <header>
          {/* <S.Tags>
            {tags.split(',').map((tag, index) => (
              <S.Tag key={tag + index}>{tag}</S.Tag>
            ))}
          </S.Tags>
           */}

          <S.Title>{title}</S.Title>
        </header>
        <S.Description>{summary}</S.Description>
        <S.Time>{formatTimestamp(date, readingTime)}</S.Time>
        <S.CallToAction>
          Ler artigo
          <S.ToLeftBtn />
        </S.CallToAction>
      </S.Container>
    </S.StyledLink>
  );
}

PostItem.propTypes = {
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default PostItem;
