import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './drop-zone.styles';

const DropZone = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default DropZone;
