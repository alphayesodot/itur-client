import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './TextAnswer.styles';

const TextAnswer = ({ isShort, answer, setAnswer, required }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} required={required}>
      <TextField
        multiline={!isShort}
        value={answer}
        className={`${classes.textField} ${isShort ? classes.short : ''}`}
        InputProps={{ className: classes.multilineColor }}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </FormControl>
  );
};

export default TextAnswer;
