import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    width: 'calc(100% - 3rem)',
    minWidth: 'calc(100% - 3rem)',
  },
  message: {
    fontSize: '1.25em',
    textAlign: 'center',
    width: '100%',
    marginTop: '3em',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
