import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './TextAnswer.styles';

const TextAnswer = ({ isShort, answer, setAnswer }) => {
  const classes = useStyles();

  return (
    <TextField
      multiline={!isShort}
      value={answer}
      className={classes.root}
      InputProps={{ className: classes.multilineColor }}
      onChange={(e) => setAnswer(e.target.value)}
    />
  );
};

export default TextAnswer;
