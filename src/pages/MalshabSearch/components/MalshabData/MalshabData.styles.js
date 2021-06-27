import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      minHeight: '35rem',
    },
  },
  content: {
    marginTop: '0.5%',
    width: '95%',
    height: '95%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  bottomSection: {
    marginTop: '0.5%',
    display: 'flex',
    minHeight: '10rem',
    justifyContent: 'center',
    alignItems: 'stretch',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  rootAttachments: {
    width: '100%',
    paddingRight: '3%',
    maxHeight: '15.75rem',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0',
    },
  },
  message: {
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: 700,
    color: 'lightgrey',
    userSelect: 'none',
    margin: 'auto',
  },
}));

export default useStyles;
