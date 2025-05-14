import { useState } from 'react';
import { FaFile, FaFolderPlus, FaTimes } from 'react-icons/fa';
import { useFileSystem } from './hooks/useFileSystem';
import { useEditorStats } from './hooks/useEditorStats';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { Button, IconButton, Modal } from './components/UI';
import './assets/styles/global.css';

const App = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [showNewFileModal, setShowNewFileModal] = useState(false);
  const { files, createFile, updateFile } = useFileSystem();
  const stats = useEditorStats(currentFile?.content || '');

  const handleCreateFile = async (type) => {
    const newFile = await createFile({
      name: `Nuevo ${type}`,
      type: type === 'folder' ? 'folder' : 'file'
    });
    setCurrentFile(newFile);
    setShowNewFileModal(false);
  };

  return (
    <div className="app-container">
      <NavBar>
        <IconButton icon={FaTimes} onClick={() => window.close()} />
      </NavBar>

      <div className="main-container">
        <Sidebar 
          files={files}
          onSelectFile={setCurrentFile}
          onCreateNew={() => setShowNewFileModal(true)}
        />
        
        <Editor 
          content={currentFile?.content || ''}
          onContentChange={(content) => updateFile(currentFile.id, content)}
          stats={stats}
        />
      </div>

      {showNewFileModal && (
        <Modal onClose={() => setShowNewFileModal(false)}>
          <h3>Crear nuevo:</h3>
          <div className="modal-actions">
            <Button variant="primary" onClick={() => handleCreateFile('file')}>
              <FaFile /> Archivo
            </Button>
            <Button onClick={() => handleCreateFile('folder')}>
              <FaFolderPlus /> Carpeta
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;