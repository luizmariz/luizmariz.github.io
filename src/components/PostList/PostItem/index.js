import React from 'react';
import { formatTimestamp } from '../../../utils/helpers';
import { MdLabel } from 'react-icons/md';
import { Anchor } from '../../shared/styled';
import PropTypes from 'prop-types';
import * as S from './styled';

function PostItem({ date, readingTime, slug, tags, title, summary }) {
  return (
    <S.Container>
      <Anchor to={slug} rel="bookmark">
        <React.Fragment>
          <S.Tags>
            <MdLabel />
            {tags}
          </S.Tags>
          <header>
            <S.Title>{title}</S.Title>
            <time>{formatTimestamp(date, readingTime)}</time>
          </header>
          <S.Description>{summary}</S.Description>
        </React.Fragment>
      </Anchor>
    </S.Container>
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
