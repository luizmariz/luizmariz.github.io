import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatedText, SectionSubTitle } from '../../utils/shared.styled';
import PostItem from '../PostItem';

import * as S from './styled';

const useActiveChildIndexAtScrollEnter = (containerRef) => {
  const [hoveredChildIndex, setHoveredChildIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !window || window.innerWidth > 1023) return;

    const handleScroll = () => {
      const children = Array.from(container.children);

      let nextHoveredChildIndex = null;

      for (let i = 0; i < children.length; i++) {
        const elementPosition = children[i].getBoundingClientRect().top;
        const scrollY = window.scrollY;

        if (
          i !== hoveredChildIndex &&
          elementPosition - 300 < scrollY - window.innerHeight + 300
        ) {
          nextHoveredChildIndex = i;
        }
      }

      setHoveredChildIndex(nextHoveredChildIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return hoveredChildIndex;
};

function PostList({ posts }) {
  const containerRef = useRef(null);
  const hoveredChildIndex = useActiveChildIndexAtScrollEnter(containerRef);

  return (
    <React.Fragment>
      <S.TitleContainer>
        <S.SectionTitle>Blog</S.SectionTitle>
        <SectionSubTitle>
          Coisas que escrevi +{' '}
          <AnimatedText>textos que mereciam um Ctrl+Z</AnimatedText>
        </SectionSubTitle>
      </S.TitleContainer>
      <S.Container ref={containerRef}>
        {posts.map(({ node }, index) => (
          <S.Wrapper key={node.fields.slug}>
            <PostItem
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.minutes}
              slug={node.fields.slug}
              tags={node.frontmatter.tags}
              title={node.frontmatter.title}
              summary={node.frontmatter.summary}
              active={hoveredChildIndex === index}
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
