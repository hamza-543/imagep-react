import React, { useState } from 'react';
import FileUploader from '../../components/FilesUploader';
import NavBar from '../../components/NavBar';

const ProcessImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <>
      <NavBar selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
      <FileUploader selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
    </>
  )
}

export default ProcessImage;