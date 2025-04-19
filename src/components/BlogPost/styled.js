import styled from 'styled-components';
import media from 'styled-media-query';

export const MainWrapper = styled.main`
  position: relative;

  .table-of-contents {
    position: sticky;
    top: 6rem;
    float: right;
    width: calc(64rem * 0.305);
    opacity: 0.5;
    padding: 1rem;

    &:hover {
      opacity: 1;
    }

    &::before {
      content: 'Neste artigo';
      font-size: 1rem;
      display: block;
      font-weight: 600;
      line-height: 100%;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    > ul {
      li {
        margin: 0;
        padding: 0;
        line-height: 150%;
        font-size: 0.875rem;
        padding-top: 1rem;
      }
    }
  }
`;

export const PostHeader = styled.header`
  max-width: calc(64rem * 0.6);

  h1 {
    padding: 0px;
    margin: 0px 0px 1.5rem;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.1;
    text-rendering: optimizelegibility;
    color: #ffffff;
  }

  time {
    display: block;
    margin-bottom: 1.75rem;
    margin-top: -0.7rem;
    font-size: 0.9rem;
    color: #ffffff77;
  }
`;

export const PostContent = styled.div`
  --text: 207, 218, 225;
  --primary: #5cbbab;

  * {
    max-width: calc(64rem * 0.6);
  }

  p {
    margin-bottom: 1.7rem;
  }

  h2,
  h3 {
    color: #ffffff;
    margin-bottom: 1.7rem;
    margin-top: 3rem;
  }

  h2 {
    font-weight: 600;
    line-height: 2rem;
  }

  h3 {
    font-weight: 500;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 2px dotted var(--primary);
  }

  a::before {
    margin-right: 0.3rem;
  }

  a.anchor,
  a.gatsby-resp-image-link {
    display: flex;
    float: none;
    flex-direction: row;
    align-items: center;
    margin: 0;
    border-bottom: none;
  }

  a.anchor:hover,
  a.gatsby-resp-image-link:hover {
    border-bottom: none;
  }

  a.anchor::before,
  a.gatsby-resp-image-link::before {
    content: none;
  }

  a.anchor svg[aria-hidden='true'] {
    padding-right: 2px;
    stroke: rgba(var(--text), 0.5);
  }

  hr {
    height: 1px;
    margin-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: rgba(var(--text), 0.3);
    border: none;
    margin: 2.5rem 0;
  }

  .mobile-gif,
  .desktop-gif {
    text-align: center;
  }

  .desktop-gif {
    display: none;
  }

  ul {
    margin: 0 0 1.5rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    max-width: calc((64rem * 0.6) + 2.6rem);
    margin: 0 0 1.75rem -1.3rem;
    padding: 0 0 0 1rem;
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
    line-height: 1.75rem;
    color: inherit;
    font-family: Fira Code VF;
    border-left: 0.35rem solid;
    border-left-color: #2a3177;

    p {
      padding: 0 1.3rem;
    }
  }

  .gatsby-highlight-code-line {
    display: block;
    min-width: calc((64rem * 0.6) + 1.9rem);
    padding-right: 0;
    padding-left: 1.3em;
    margin-left: -1.3rem;
    border-left: 0.25em solid #ffffff;
    background: rgba(227, 233, 247, 0.08);
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    margin-left: -1.3rem;
    max-width: calc(64rem * 0.6 + 2.6rem);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 0;
    background-color: transparent;
    border: 0.35rem solid rgb(0 12 26 / 60%);
    backdrop-filter: blur(2px);
    background: rgba(227, 233, 247, 0.05);

    * {
      font-family:
        Fira Code VF,
        monospace;
      font-size: 0.765rem;
    }
  }

  pre[class*='language-'] {
    font-family:
      Fira Code VF,
      monospace;
    padding: 1.3rem;
    overflow: auto;
    background-color: transparent;
    margin: 0;
  }

  :not(pre) > code[class*='language-'] {
    color: inherit;
    background: var(--tertiary);
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  [class*='gatsby-resp-image'] {
    box-shadow: none !important;
    margin-left: none !important;
    margin-right: none !important;
    max-width: none !important;
  }

  img {
    border: 0.35rem solid rgba(200, 199, 193, 0.1);
    margin: 0 !important;
    margin-left: -1.3rem !important;
    min-width: calc(64rem * 0.6 + 2.6rem) !important;
    max-width: calc(64rem * 0.6 + 2.6rem) !important;
  }

  .gatsby-remark-prismjs-copy-button {
    &:hover {
      background: rgb(41, 41, 41);
    }
  }

  ${media.greaterThan('medium')`
    .mobile-gif {
      display: none;
    }

    .desktop-gif {
      display: inherit;
    }

    a:hover {
      border-bottom: 2px solid var(--primary);
    }

    blockquote {
      margin-left: -1.3rem;
      padding-left: 1rem;

      p {
        padding: 0;
      }
    }
  `}
`;
