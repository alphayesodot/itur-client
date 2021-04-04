/* eslint-disable no-unused-vars */
import ListItem from '@material-ui/core/ListItem';
import useStyles from './Question.styles';
import AmericanAnswer from './AmericanAnswer/AmericanAnswer';

const Question = ({ question, setAnswerFunction }) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.li} style={{ textAlign: 'right' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '0.7rem', cursor: 'inherit' }}>
            {question}
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <AmericanAnswer />
        </div>
      </div>
    </ListItem>
  );
};

export default Question;
