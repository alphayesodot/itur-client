import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1% auto',
    background: theme.palette.primary.main,
    width: '100%',
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2.2rem',
    paddingLeft: '1rem',
    marginLeft: '3%',
    direction: 'ltr',
    margin: '1%',
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
