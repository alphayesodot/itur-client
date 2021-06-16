import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
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
  },
  button: {
    background: theme.palette.primary.secondary,
    height: '2rem',
    padding: '1rem 2rem',
    marginTop: '1.5rem',
    borderRadius: 30,
    fontWeight: '600',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.secondary,
      border: `1px solid ${theme.palette.primary.secondary}`,
    },
  },
  iconButton: {
    marginTop: '1.5rem',
  },
}));

export default useStyles;
