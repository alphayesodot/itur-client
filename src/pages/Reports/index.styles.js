import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  title: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: '800',
    userSelect: 'none',
  },
}));

export default useStyles;
