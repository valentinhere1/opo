import { useState } from 'react';
import { StatusBar } from './StatusBar';
import './Editor.css';

export const Editor = ({ content, onContentChange, stats }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <div className="editor-pane">
      <div className="editor-content">
        <textarea
          className="text-editor"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          style={{ fontSize: `${zoomLevel}%` }}
        />
      </div>
      <StatusBar 
        stats={stats} 
        zoomLevel={zoomLevel}
        onZoomChange={setZoomLevel}
      />
    </div>
  );
};