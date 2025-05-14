import { useState, useEffect } from 'react';

const TextEditor = ({ content, onContentChange }) => {
  const [text, setText] = useState(content);

  useEffect(() => {
    onContentChange(text);
  }, [text]);

  return (
    <textarea
      className="text-editor"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Escribe aquí tu novela..."
    />
  );
};