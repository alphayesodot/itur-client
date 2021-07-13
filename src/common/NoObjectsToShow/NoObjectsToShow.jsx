import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './NoObjectsToShow.styles';

const NoObjectsToShow = ({ title }) => {
  const classes = useStyles();
  return (
    (
      <Typography className={classes.root}>
        {title}
      </Typography>
    )
  );
};

export default NoObjectsToShow;
