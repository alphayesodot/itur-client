import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  list: {
    width: '80%',
    height: '100%',
    direction: 'rtl',
  },
}));

export default useStyles;
