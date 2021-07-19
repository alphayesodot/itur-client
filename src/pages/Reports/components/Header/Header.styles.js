import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '5rem',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('lg')]: {
      minHeight: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1%',
      justifyContent: 'center',
    },
  },
  inputsDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2rem',
  },
  select: {
    height: '2.3rem',
    width: '13.25em',
    padding: '1em',
  },
  textField: {
    paddingLeft: '1rem',
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
  },
  date: {
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
    maxWidth: '12rem',
  },
  button: {
    background: theme.palette.primary.secondary,
    height: '2.5rem',
    padding: '1rem 2rem',
    borderRadius: 30,
    fontWeight: '600',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.secondary,
    },
  },
  undo: {
    width: '1.25rem',
    height: '1.25rem',
  },
}));

export default useStyles;
