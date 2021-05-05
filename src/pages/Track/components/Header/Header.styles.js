import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
  content: {
    padding: '1.25em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: '35%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  item: {
    margin: '0 1em',
    [theme.breakpoints.down('sm')]: {
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
  unit: {
    color: 'white',
    fontSize: '1.15em',
    whiteSpace: 'nowrap',
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
