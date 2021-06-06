import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 15rem)',
    },
  },
  message: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  list: {
    width: '80%',
    height: '80%',
    direction: 'rtl',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
}));

export default useStyles;
