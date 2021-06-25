import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1% auto',
    marginBottom: '1%',
    background: theme.palette.primary.main,
    width: '100%',
    minHeight: '5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      padding: '2% auto',
      minHeight: '8rem',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: 30,
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2.3rem',
    paddingLeft: '1rem',
    marginLeft: '3%',
    direction: 'ltr',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(98% - 1rem)',
    },
  },
  button: {
    background: theme.palette.primary.secondary,
    height: '2.5rem',
    margin: '1%',
    padding: '1rem 2rem',
    borderRadius: 30,
    fontWeight: '600',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.secondary,
    },
  },
}));

export default useStyles;
