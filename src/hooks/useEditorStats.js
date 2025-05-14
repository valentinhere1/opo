import { useState, useEffect } from 'react';
import localforage from 'localforage';

export const useFileSystem = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const savedFiles = await localforage.getItem('novel-files') || [];
        setFiles(savedFiles);
      } catch (error) {
        console.error('Error loading files:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadFiles();
  }, []);

  const createFile = async (fileData) => {
    const newFile = {
      id: Date.now(),
      ...fileData,
      createdAt: new Date(),
      modifiedAt: new Date(),
      content: ''
    };
    
    const updatedFiles = [...files, newFile];
    await localforage