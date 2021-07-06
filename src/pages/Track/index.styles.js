import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    width: '100%',
  },
  message: {
    fontSize: '2em',
    minHeight: '25rem',
    fontWeight: '600',
    color: 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: '1rem',
    width: '100%',
    fontFamily: theme.typography.fontFamily,
  },
}));

export default useStyles;
