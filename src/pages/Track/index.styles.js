import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    width: 'calc(100% - 5.5vw)',
    minWidth: 'calc(100% - 5.5vw)',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      width: '100%',
    },
  },
  message: {
    fontSize: '1.25em',
    textAlign: 'center',
    width: '100%',
    marginTop: '3em',
  },
}));

export default useStyles;
