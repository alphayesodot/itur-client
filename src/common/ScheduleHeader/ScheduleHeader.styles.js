import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    direction: 'rtl',
  },
  content: {
    padding: '1.25em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'stretch',
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
    textAlign: 'left',
  },
  dateInput: {
    marginLeft: '1em',
    paddingTop: '0.2rem',
    height: '2.3rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 1em)',
    },
  },
}));

export default useStyles;
