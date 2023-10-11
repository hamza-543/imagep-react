import React, { useState } from 'react';
import FileUploader from '../../components/FilesUploader';
import NavBar from '../../components/NavBar';

const ProcessImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);

  return (
    <>
      <NavBar selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} setIsConverting={setIsConverting}/>
      <FileUploader selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} isConverting={isConverting}/>
    </>
  )
}

export default ProcessImage;