/* eslint-disable no-unused-vars */
import ListItem from '@material-ui/core/ListItem';
import useStyles from './Question.styles';

const Question = ({ question, setAnswerFunction }) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.li}>
      <span style={{ fontSize: '0.7rem' }}>{question}</span>
    </ListItem>
  );
};

export default Question;
