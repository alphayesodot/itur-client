import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDiv: {
    backgroundColor: 'black',
    height: '90%',
    width: '60%',
  },
}));

export default useStyles;
