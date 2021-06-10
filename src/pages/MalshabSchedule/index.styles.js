import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mainInner: {
    marginTop: '1em',
    backgroundColor: 'transparent',
    height: 'calc(100vh - 15em)',
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  },
}));

export default useStyles;
