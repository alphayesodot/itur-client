import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 1em',
    [theme.breakpoints.down('sm')]: {
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
  date: {
    borderRadius: 30,
    height: '2em',
    width: '15em',
    padding: '0.25em 1.3em',
    paddingLeft: '0.7rem',
    background: 'white',
    borderBottom: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
}));

export default useStyles;
