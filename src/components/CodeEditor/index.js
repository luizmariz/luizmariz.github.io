import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import React, { useState } from 'react';
import * as S from './styled';

function CodeEditorWindow({
  initialCode = '',
  language = 'javascript',
  onChange
}) {
  const [code, setCode] = useState(initialCode);
  const [highlightedCode, setHighlightedCode] = useState('');

  React.useEffect(() => {
    const highlighted = Prism.highlight(
      code,
      Prism.languages[language],
      language
    );
    setHighlightedCode(highlighted);
  }, [code, language]);

  const lineCount = Math.max(code.split('\n').length, 1);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join(
    '\n'
  );

  return (
    <S.EditorContainer>
      <S.EditorHeader>
        <S.TabsContainer>
          <S.Tab $active={1}>editor.js</S.Tab>
          <S.Tab>styles.css</S.Tab>
          <S.Tab>index.html</S.Tab>
        </S.TabsContainer>
        <S.WindowControls>
          <S.Button color="#27c93f" />
          <S.Button color="#ffbd2e" />
          <S.Button color="#ff5f56" />
        </S.WindowControls>
      </S.EditorHeader>
      <S.EditorContent>
        <S.LineNumbers>{lineNumbers}</S.LineNumbers>
        <S.CodeEditor>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          <S.CodeInput
            className={`language-${language}`}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              onChange(e.target.value);
            }}
            spellCheck="false"
          />
        </S.CodeEditor>
      </S.EditorContent>
    </S.EditorContainer>
  );
}

export default CodeEditorWindow;
