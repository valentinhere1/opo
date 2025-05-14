import { useState } from 'react';
import { FileTree } from './FileTree';
import './Sidebar.css';

export const Sidebar = ({ files, onSelectFile, onCreateNew }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Explorador</h3>
        <button className="new-file-btn" onClick={onCreateNew}>
          +
        </button>
      </div>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar archivos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <FileTree 
        files={files} 
        onSelectFile={onSelectFile} 
        searchQuery={searchQuery}
      />
    </div>
  );
};