import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '80%',
    width: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    margin: '0.5em',
  },
  list: {
    padding: 0,
  },
}));

export default useStyles;
