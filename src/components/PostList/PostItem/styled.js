import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 2rem;
  width: 100%;
  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 10px;
  padding: 1.7rem 2rem;
  transition: border 0.1s ease-in;

  svg {
    color: rgba(var(--heart), 0.5);
    margin-right: 0.5rem;
  }

  &:hover {
    border: 1px solid rgba(var(--text), 0.5);
    transition: border 0.1s ease-in;
    cursor: pointer;
  }

  a {
    display: block;
  }
`;

export const Tags = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(var(--text), 0.7);
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  margin-top: 0;
  color: var(--secondary);
`;

export const Description = styled.p`
  margin-top: 0.4rem;
  margin-bottom: 0;
  color: rgb(var(--text));
`;

export const Time = styled.time`
  font-size: 0.9rem;
`;
