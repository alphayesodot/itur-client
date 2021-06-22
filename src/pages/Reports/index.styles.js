import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  dashboard: {
    height: '100%',
    marginTop: '1%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
