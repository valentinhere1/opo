import { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import TextEditor from './components/Editor/TextEditor';
import useFileSystem from './hooks/useFileSystem';
import './App.css';

const App = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const { files, createFile } = useFileSystem();
  
  return (
    <div className="app-container">
      <NavBar onClose={() => window.close()} />
      
      <div className="main-container">
        <Sidebar 
          files={files}
          onCreateFile={createFile}
          onSelectFile={setCurrentFile}
        />
        
        {currentFile ? (
          <TextEditor 
            content={currentFile.content}
            onContentChange={(content) => updateFile(currentFile.id, content)}
          />
        ) : (
          <div className="empty-state">
            <h2>Selecciona o crea un nuevo archivo</h2>
          </div>
        )}
      </div>
    </div>
  );
};