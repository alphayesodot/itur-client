import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './TextAnswer.styles';

const TextAnswer = ({ isShort, answer, setAnswer }) => {
  const classes = useStyles();

  return (
    <TextField
      multiline={!isShort}
      className={classes.root}
      InputProps={{ className: classes.multilineColor }}
    />
  );
};

export default TextAnswer;
