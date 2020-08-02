import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  margin-top: 2rem;
  padding: 1.7rem 2rem;

  border: 1px solid rgba(var(--text), 0.2);
  border-radius: 10px;
  transition: border 0.1s ease-in;

  svg {
    margin-right: 0.5rem;
    color: var(--secondary);
  }

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(var(--text), 0.5);
    transition: border 0.1s ease-in;
  }

  a {
    display: block;
  }
`;

export const Tags = styled.span`
  display: flex;
  margin-bottom: 0;
  margin-top: 1rem;
  align-items: center;

  font-size: 0.9rem;
  color: rgb(var(--text));
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  margin-top: 0;

  color: var(--primary);
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  color: rgba(var(--text), 0.7);
`;

export const Time = styled.time`
  margin-bottom: .5rem;
  margin-top: 0;
`;
