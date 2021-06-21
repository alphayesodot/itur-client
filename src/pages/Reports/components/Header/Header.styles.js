import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: '5%',
      justifyContent: 'center',
    },
  },
  inputsDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '80%',
    marginBottom: '0.5%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2.2rem',
  },
  select: {
    height: '2.5rem',
    width: '13.25em',
  },
  textField: {
    paddingLeft: '1rem',
  },
  date: {
    padding: '0.07rem 0.5rem',
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
