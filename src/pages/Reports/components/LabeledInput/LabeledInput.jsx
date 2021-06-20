import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './LabeledInput.styles';

const LabeledInput = ({ label, input }) => {
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

export default LabeledInput;
