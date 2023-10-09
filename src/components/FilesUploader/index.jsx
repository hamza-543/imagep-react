import React from 'react';
import ImageCardList from '../ImageCardList';
import FileUpload from './FileUpload';

const FileUploader = ({selectedFiles, setSelectedFiles}) => {

  const handleSelectedFiles = (event) => {
    setSelectedFiles((prevSelectedFiles) => prevSelectedFiles.concat(Array.from(event.target.files)));
  };

  return (
    <>
      {selectedFiles.length > 0 ?
        (
        <ImageCardList files={selectedFiles} handleSelectedFiles={handleSelectedFiles}></ImageCardList>
        ):
        (
          <FileUpload handleSelectedFiles={handleSelectedFiles}/>
        )
      }
    </>
  );
};

export default FileUploader;
