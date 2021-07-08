import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    width: '100%',
  },
  message: {
    fontSize: '1.25em',
    textAlign: 'center',
    width: '100%',
    marginTop: '3em',
  },
}));

export default useStyles;
