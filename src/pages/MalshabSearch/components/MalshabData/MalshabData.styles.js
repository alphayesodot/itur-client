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
    width: '95%',
    margin: 'auto',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  bottomSection: {
    marginTop: '3%',
    display: 'flex',
    minHeight: '10rem',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  rootAttachments: {
    width: '100%',
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
