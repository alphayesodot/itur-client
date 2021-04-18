import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '95%',
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
    margin: '0 0.2em',
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
  select: {
    width: '12rem',
    height: '2.5em',
    background: 'white',
    borderRadius: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  icon: {
    fill: '#9aa3aa',
    width: '185%',
  },
  date: {
    borderRadius: 30,
    height: '2em',
    padding: '0.25em',
    paddingLeft: '6em',
    background: 'white',
    borderBottom: 'none',
  },
  button: {
    background: theme.palette.primary.secondary,
    borderRadius: 30,
    margin: '0.5em 0',
    padding: '0.4em 2em',
    '&:hover': {
      background: 'white',
    },
  },
}));

export default useStyles;
