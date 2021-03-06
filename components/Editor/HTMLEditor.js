// FIXME: Add beter editor
/* eslint-disable */

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import React from 'react';
import CodeMirror from 'react-codemirror';

const HtmlEditor = props => {
  const { data, onChange } = props;
  return (
    <div className="border w-100">
      <CodeMirror
        defaultValue={data}
        options={{
          mode: 'markdown',
          spellcheck: true,
          autocorrect: true,
          lineWrapping: true,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default HtmlEditor;
