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
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: 30,
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2.3rem',
    paddingLeft: '1rem',
    marginLeft: '1%',
    direction: 'ltr',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    background: theme.palette.primary.secondary,
    height: '2.5rem',
    margin: '0.5%',
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
