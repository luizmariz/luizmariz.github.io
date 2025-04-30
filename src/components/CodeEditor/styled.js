import styled, { css } from 'styled-components';

export const EditorContainer = styled.div`
  font-family: 'Fira Code', monospace;
  width: 460px;
  overflow: hidden;
  border: 1px solid #99999955;
  box-shadow: -5px 5px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const EditorHeader = styled.div`
  background: rgb(24, 24, 24);
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  margin-left: auto;
`;

export const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  padding: 0 16px;
  padding-top: 10px;
  padding-bottom: 5px;
  background:rgb(24, 24, 24)
  color: rgb(185, 185, 185);
  font-size: 10px;
  position: relative;
  border-right: 1px solid #99999955;

  ${(props) =>
    props.active
      ? css`
          background: #1e1e1e;
          color: rgb(100, 223, 161);

          &:after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            height: 1px;
            width: calc(100% + 1px);
            background: rgb(77, 84, 160);
          }

          &:before {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            width: 100%;
            background: #1e1e1e;
          }
        `
      : css``};
`;

export const EditorContent = styled.div`
  background: #1e1e1e;
  padding: 16px 0;
  width: 100%;
  height: 285px;
  display: flex;
  align-items: start;
  overflow-x: auto;
  font-size: 12px;
  line-height: 21px;
  font-family: inherit;
  tab-size: 2;
  border-top: 1px solid #99999955;
  white-space: pre;
  letter-spacing: normal;

  @media (max-width: 1023px) {
    height: 252px;
    overflow: hidden;
  }
`;

export const LineNumbers = styled.div`
  color: #858585;
  user-select: none;
  text-align: right;
  width: 1rem;
  margin-left: 0.5rem;
  display: block;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  tab-size: inherit;
  white-space: inherit;
`;

export const CodeEditor = styled.pre`
  display: block;
  margin: 0 1rem;
  background: transparent !important;
  color: #d4d4d4;
  position: relative;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  tab-size: inherit;
  white-space: inherit;
  letter-spacing: inherit;
  min-height: 1rem;
  min-width: calc(100% - 4rem);

  code {
    display: block;
    font-size: inherit !important;
    line-height: inherit !important;
    font-family: inherit !important;
    tab-size: inherit !important;
    white-space: inherit !important;
    letter-spacing: inherit !important;
  }
`;

export const CodeInput = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: transparent;
  caret-color: #ffffff55;
  resize: none;
  outline: none;
  z-index: 1;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  tab-size: inherit;
  white-space: inherit;
  letter-spacing: inherit;
  overflow: hidden;

  @media (max-width: 1023px) {
    display: none;
  }
`;
