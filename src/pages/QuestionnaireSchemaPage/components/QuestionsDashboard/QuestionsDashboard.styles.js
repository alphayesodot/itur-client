import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.dialog.secondaryLight,
    padding: '1rem',
  },
  internalQuestionContainer: {
    overflowY: 'scroll',
    direction: 'rtl',
    height: '18rem',
    display: 'flex',
    flexDirection: 'column',
  },
  questionnaireCreationTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    textAlign: 'left',
    direction: 'rtl',
    marginBottom: '0.5rem',
    marginLeft: '0.3em',
  },
  number: {
    width: '2rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '1rem',
    },
  },
  titleQuestionType: {
    marginLeft: '0.6rem',
    padding: '0 0.3rem',
    paddingRight: '0',
    width: '20%',
  },
  titleQuestion: {
    width: '70%',
  },
  titlePlaceholder: {
    margin: '0 0.5rem',
    width: '1.2rem',
  },
  questionsLines: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  questionLine: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: '0.4rem',
  },
  titleMust: {
    width: '2.625rem',
    textAlign: 'center',
  },
}));

export default useStyles;
