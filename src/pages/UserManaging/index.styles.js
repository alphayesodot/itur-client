import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainDiv: {
    display: 'flex',
    alignItems: 'stretch',
  },
  paper: {
    borderRadius: 15,
  },
}));

export default useStyles;
