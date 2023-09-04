import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  thumbImage: {
    maxWidth: 150,
    maxHeight: 150,
    minWidth: 150,
    minHeight: 150,
    objectFit: 'contain',
  },
}));

const ThumbImage = ({ src, alt, className, ...restProps }) => {
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={alt}
      className={clsx(classes.thumbImage, className)}
      {...restProps}
    />
  );
};

export default ThumbImage;
