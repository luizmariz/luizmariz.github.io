import PropTypes from 'prop-types';
import React from 'react';
import PostItem from '../PostItem';
import * as S from './styled';

function PostList({ posts }) {
  return (
    <React.Fragment>
      <S.TitleContainer>
        <S.SectionTitle>Blog</S.SectionTitle>
        <S.SectionSubTitle>
          Coisas que escrevi +{' '}
          <S.AnimatedText>textos que mereciam um Ctrl+Z 🧠</S.AnimatedText>
        </S.SectionSubTitle>
      </S.TitleContainer>
      <S.Container>
        {posts.map(({ node }) => (
          <S.Wrapper key={node.fields.slug}>
            <PostItem
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.minutes}
              slug={node.fields.slug}
              tags={node.frontmatter.tags}
              title={node.frontmatter.title}
              summary={node.frontmatter.summary}
            />
          </S.Wrapper>
        ))}
      </S.Container>
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
