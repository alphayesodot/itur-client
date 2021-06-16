import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './InputSection.styles';

const InputSection = ({ label, input }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.inputLabel}>
        {label}
      </Typography>
      {input}
    </div>
  );
};

export default InputSection;
