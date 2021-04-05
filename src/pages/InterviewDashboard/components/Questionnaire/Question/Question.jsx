/* eslint-disable no-unused-vars */
import ListItem from '@material-ui/core/ListItem';
import useStyles from './Question.styles';
import AmericanAnswer from './AmericanAnswer/AmericanAnswer';

const Question = ({ question, setAnswerFunction }) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.li}>
      <div className={classes.qaContainer}>
        <p className={classes.question}>{question}</p>
        <AmericanAnswer />
      </div>
    </ListItem>
  );
};

export default Question;
