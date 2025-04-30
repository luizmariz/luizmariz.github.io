import styled from 'styled-components';

import background from '../../assets/svgs/post-background.svg';

export const MainWrapper = styled.main`
  position: relative;

  .table-of-contents {
    position: sticky;
    top: 6rem;
    float: right;
    width: calc(64rem * 0.255);
    opacity: 0.5;
    padding: 1rem;

    &:hover {
      opacity: 1;
    }

    &::before {
      content: 'Neste artigo';
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: uppercase;
      display: block;
      opacity: 0.9;
      line-height: 100%;
      text-shadow: 0 0 5px rgba(0, 195, 255, 0.5);
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

    @media (max-width: 1023px) {
      display: none;
    }
  }
`;

export const PostHeader = styled.header`
  max-width: calc(64rem * 0.65);
  padding-top: 1rem;
  margin-bottom: 3rem;
  position: relative;

  h1 {
    padding: 0px;
    margin: 0px 0px 0.5rem;
    line-height: 125%;
    text-rendering: optimizelegibility;
    color: #cfdae1;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    font-style: italic;
  }

  time {
    display: block;
    margin-left: 0.15rem;
    font-size: 0.9rem;
    color: #cfdae177;
    font-style: italic;
  }

  &:after {
    content: '';
    position: absolute;
    top: -3rem;
    left: -2.2rem;
    width: 140%;
    height: 140%;
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 30px 25px rgba(0, 12, 26, 1);
    opacity: 0.7;
    z-index: -1;
  }
`;

export const PostContent = styled.div`
  --text: 207, 218, 225;
  --primary: #5cbbab;

  * {
    max-width: calc(64rem * 0.65);
  }

  p {
    margin-bottom: 1.7rem;
  }

  h2,
  h3 {
    color: #cfdae1;
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
    display: inline;
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
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(var(--text), 0.2) 20%,
      rgba(var(--text), 0.2) 80%,
      transparent 100%
    );
  }

  .mobile-gif,
  .desktop-gif {
    text-align: center;
  }

  .mobile-gif {
    display: none;
  }

  ul {
    margin: 0 0 1.5rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    max-width: calc(64rem * 0.65 + 3.7rem) !important;
    min-width: calc(64rem * 0.65 + 3.7rem) !important;
    margin: 0 0 1.75rem -1.5rem;
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
    line-height: 1.75rem;
    color: inherit;
    font-family: Fira Code VF;
    border-left: 0.35rem solid;
    border-left-color: #2a3177;

    p {
      padding: 0 1.5rem;
      padding-left: calc(1.5rem - 0.35rem);
    }
  }

  .gatsby-highlight-code-line {
    min-width: calc(64rem * 0.65 + 3rem) !important;
    max-width: unset !important;
    display: block;
    padding-right: 0;
    padding-left: 1.15rem;
    margin-left: -1.5rem;
    border-left: 0.35rem solid #cfdae1;
    background: rgba(227, 233, 247, 0.08);
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    margin-left: -1.85rem;
    max-width: calc(64rem * 0.65 + 3.7rem) !important;
    min-width: calc(64rem * 0.65 + 3.7rem) !important;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 0;
    background-color: transparent;
    border: 0.35rem solid rgb(0 12 26 / 60%);
    backdrop-filter: blur(2px);
    background: rgba(227, 233, 247, 0.05);
  }

  pre[class*='language-'] {
    font-family:
      Fira Code VF,
      monospace;
    padding: 1.5rem;
    overflow: auto;
    background-color: transparent;
    margin: 0;
  }

  :not(pre) > code[class*='language-'] {
    color: inherit;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
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
    margin-left: -1.85rem !important;
    max-width: calc(64rem * 0.65 + 3.7rem) !important;
    min-width: calc(64rem * 0.65 + 3.7rem) !important;
  }

  .gatsby-remark-prismjs-copy-button {
    &:hover {
      background: rgb(41, 41, 41);
    }
  }

  @media (max-width: 1023px) {
    .desktop-gif {
      display: none;
    }

    .desktop-gif {
      display: static;
    }

    * {
      max-width: 100vw !important;
    }

    img,
    blockquote,
    .gatsby-highlight,
    .gatsby-highlight-code-line {
      min-width: calc(100vw + 0.7rem) !important;
      max-width: calc(100vw + 0.7rem) !important;
    }

    .gatsby-remark-prismjs-copy-button {
      background: transparent;

      &:hover {
        background: rgb(41, 41, 41);
      }
    }
  }
`;
