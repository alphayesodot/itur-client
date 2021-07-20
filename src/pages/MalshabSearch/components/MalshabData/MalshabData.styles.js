import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      minHeight: '100%',
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
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      minHeight: '95%',
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
    height: '15.75rem',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0',
      height: 'auto',
    },
  },
}));

export default useStyles;
