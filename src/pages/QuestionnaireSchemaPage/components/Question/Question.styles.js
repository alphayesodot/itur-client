import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
  },
  question: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  answers: {
    width: '82%',
    direction: 'ltr',
    margin: '0.5rem auto',
    marginLeft: '3.2rem',
    marginRight: '4.8rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '82%',
      marginRight: '3.1rem',
      marginLeft: '3rem',
    },
  },
  select: {
    backgroundColor: 'white',
    width: '20%',
    margin: '0 0.5rem',
    borderRadius: '15px',
    border: '3px solid',
    padding: '0.3rem',
    paddingLeft: '1rem',
    borderColor: theme.palette.dialog.secondaryMid,
    [theme.breakpoints.down('sm')]: {
      width: '20%',
      minWidth: '4rem',
    },
  },
  input: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: '15px',
    direction: 'ltr',
    border: '3px solid',
    margin: 0,
    padding: '0.3rem 1rem',
    borderColor: theme.palette.dialog.secondaryMid,
    '& .Mui-error': {
      color: 'red',
      fontSize: '1rem',
      fontWeight: '800',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  inputDescription: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    borderRadius: '15px',
    direction: 'ltr',
    border: '3px solid',
    margin: 0,
    padding: '0.3rem 1rem',
    borderColor: theme.palette.dialog.secondaryMid,
  },
  deleteIcon: {
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
    width: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      width: '0.8rem',
      margin: 0,
    },
  },
  expandButton: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  expandIcon: {
    width: '1.4rem',
    [theme.breakpoints.down('sm')]: {
      width: '1.2rem',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
  checkbox: {
    '&$checkedCheckbox': {
      color: theme.palette.dialog.primary,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checkedCheckbox: {
  },
}));

export default useStyles;
