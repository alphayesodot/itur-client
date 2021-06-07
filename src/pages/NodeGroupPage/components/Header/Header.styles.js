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
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '35%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      width: '100%',
    },
  },
  input: {
    backgroundColor: 'white',
    width: '12rem',
    borderRadius: '15px',
  },
  newNodeGroupButton: {
    backgroundColor: theme.palette.section.secondary,
    color: theme.palette.primary.main,
    width: '7.5rem',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
  tangparent: {
    backgroundColor: 'transparent',
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
  },
}));

export default useStyles;
