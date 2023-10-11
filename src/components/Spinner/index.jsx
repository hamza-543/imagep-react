import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  spinnerOverlay: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "80%",
    background: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
}));

const Spinner = (props) => {
  return (
    <CircularProgress color='primary' {...props}/>
  );
};

export const SpinnerAfterNav = ({message}) => {
  const classes = useStyles();

  return(
    <div className={classes.spinnerOverlay}>
      <Spinner />
      <p>{message}</p>
    </div>
  )
}

export default Spinner;
