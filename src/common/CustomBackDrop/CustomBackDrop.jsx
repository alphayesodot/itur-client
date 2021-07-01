import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from './CustomBackDrop.styles';

const CustomBackDrop = () => {
  const classes = useStyles();

  return (
    <Backdrop open className={classes.root}>
      <CircularProgress color='primary' />
    </Backdrop>
  );
};

export default CustomBackDrop;
