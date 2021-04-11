/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './Question.styles';
import AmericanAnswer from './AmericanAnswer/AmericanAnswer';

const Question = ({ question, setAnswerFunction }) => {
  const classes = useStyles();

  return (
    <ListItem button className={classes.li}>
      <div className={classes.qaContainer}>
        <AmericanAnswer />
        <p className={classes.question}>{question}</p>
      </div>
    </ListItem>
  );
};

export default Question;
