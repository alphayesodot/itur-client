import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    height: '20rem',
  },
  mainDiv: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%',
  },
  button: {
    position: 'absolute',
    right: '5rem',
    top: '9rem',
  },
}));

export default useStyles;
