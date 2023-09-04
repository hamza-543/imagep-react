import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';
import ImageCard from '../ImageCard';
import { getImageUrl } from '../../utils';
import FileUpload from '../FilesUploader/FileUpload';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1600px !important',
    margin: '0 !important',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    gap: theme.spacing(2),
    margin: 0,
  },
}));

const ImageCardList = ({files, handleSelectedFiles}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.cardContainer}>
        {files.map((file, index) => (
          <ImageCard
            key={index}
            imageUrl={getImageUrl(file)}
            title={file.name}
          />
        ))}
        <FileUpload handleSelectedFiles={handleSelectedFiles} template='inline'/>
      </div>
    </Container>
  );
}

export default ImageCardList;
