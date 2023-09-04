import React from 'react';
import { useStyles } from './useStyles';

const FileUpload = ({ handleSelectedFiles, template = '' }) => {
  const classes = useStyles();

  return (
    <div className={ template === '' ? classes.fileUploadContainer : classes.fileUploadContainer1 }>
      <div className={classes.uploadContainer}>
        <label htmlFor="uploadFiles" style={{ cursor: 'pointer' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              style={{ width: '44px', height: '44px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <span className={template === '' ? classes.uploadText : classes.uploadText1 }>Upload Files</span>
          </div>
          <input
            type="file"
            id="uploadFiles"
            multiple
            onChange={handleSelectedFiles}
            className={classes.fileInput}
          />
        </label>
      </div>
    </div>
  );
}

export default FileUpload;
