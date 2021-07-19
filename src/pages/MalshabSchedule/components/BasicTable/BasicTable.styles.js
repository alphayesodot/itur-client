import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '77.5%',
    direction: 'rtl',
  },
  message: {
    fontWeight: '600',
    fontSize: '1.5rem',
    textAlign: 'center',
    color: 'lightgrey',
  },
}));

export default useStyles;
