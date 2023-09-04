import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Tooltip } from '@mui/material';
import ThumbImage from '../ThumbImage';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 174,
    minWidth: 174,
    minHeight: 174,
    maxHeight: 174,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '90%',
    paddingLeft: 10,
  },
}));

const ImageCard = ({ imageUrl, title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <ThumbImage 
        src={imageUrl}
        alt={title}
        className=''
      />
      <Tooltip title={`tooltip-${title}`} classes={{ tooltip: classes.tooltip }}>
        <Typography className={classes.title} alt={title} variant="body1">{title}</Typography>
      </Tooltip>
    </Card>
  );
}

export default ImageCard;
