import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: '55rem',
    paddingBottom: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1rem',
    fontFamily: theme.typography.fontFamily,
  },
  delatils: {
    width: '100%',
    margin: 'auto 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: '1.5rem',
  },
  inputContainer: {
    width: '33%',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    [theme.breakpoints.down('md')]: {
      width: '48%',
    },
  },
  marginBottom: {
    marginBottom: '1rem',
  },
  nodesContainer: {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  questions: {
    marginBottom: '1.5rem',
  },
  questionsTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
  },
  questionsDashBoard: {
    backgroundColor: theme.palette.dialog.secondaryLight,
    padding: '1rem',
  },
  noNodes: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.dialog.secondary,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: theme.palette.dialog.secondary,
    marginBottom: '0.25rem',
  },
  select: {
    width: '100%',
    border: 'solid 2px',
    borderColor: theme.palette.dialog.secondaryLight,
    borderRadius: '15px',
    padding: '0.5rem',
  },
  input: {
    width: '100%',
    border: 'solid 2px',
    borderColor: theme.palette.dialog.secondaryLight,
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '0.6em 1rem',
    boxSizing: 'border-box',
    '&$erroredInput': {
      color: 'red',
      borderColor: 'red',
    },
  },
  erroredInput: {

  },
  actions: {
    margin: 'auto',
    alignItems: 'right',
    marginTop: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    padding: 0,
  },
  saveButton: {
    backgroundColor: theme.palette.dialog.primary,
    borderRadius: '25px',
    padding: '0.5rem 1rem',
    color: 'white',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.dialog.primary,
      border: `1px solid ${theme.palette.dialog.primary}`,
    },
  },
  disabledButton: {
    backgroundColor: theme.palette.dialog.secondaryMid,
    border: '1px solid transparent',
  },
  selectRoleCheckbox: {
    '&$checkedCheckbox': {
      color: theme.palette.dialog.primary,
    },
  },
  checkedCheckbox: {
  },
}));

export default useStyles;
