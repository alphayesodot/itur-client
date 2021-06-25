import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '10%',
    minHeight: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    padding: '1.25em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '35%',
    width: '100%',
  },
  headerGroups: {
    flex: '0 1 50%',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flex: '0 1 70%',
      width: '100%',
      justifyContent: 'center',
    },
  },
  input: {
    backgroundColor: 'white',
    width: '14rem',
    borderRadius: '15px',
    color: theme.palette.font.secondary,
    fontWeight: 'bold',
    direction: 'ltr',
    padding: '0.2rem 1rem',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
  newNodeGroupButton: {
    backgroundColor: theme.palette.section.secondary,
    color: theme.palette.primary.main,
    width: '7.5rem',
    borderRadius: '20px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.section.secondary,
    },
  },
  searchButton: {
    backgroundColor: 'transparent',
    margin: 'auto 0.5em',
    boxShadow: 'none',
    '&:hover': {
      transform: 'rotate(-10deg)',
      transitionDuration: '0.2s',
      backgroundColor: 'transparent',
    },
  },
  searchImg: {
    width: '1.7rem',
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
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1rem',
    },
  },
}));

export default useStyles;
