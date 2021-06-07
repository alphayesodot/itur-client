import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from './CustomeBackDrop.styles';

const CustomeBackDrop = () => {
  const classes = useStyles();

  return (
    <Backdrop open className={classes.backdrop}>
      <CircularProgress color='primary' />
    </Backdrop>
  );
};

export default CustomeBackDrop;
