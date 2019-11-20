import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

function PostList({ posts }) {
  return (
    <S.Container>
      {posts.map(({ node }) => (
        <PostItem
          key={node.fields.slug}
          date={node.frontmatter.date}
          readingTime={node.fields.readingTime.minutes}
          slug={node.fields.slug}
          tags={node.frontmatter.tags}
          title={node.frontmatter.title}
          summary={node.frontmatter.summary}
        />
      ))}
    </S.Container>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;