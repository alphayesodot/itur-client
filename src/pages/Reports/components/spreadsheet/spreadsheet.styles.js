import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '10px',
    height: '100%',
  },
  input: {
    pointerEvents: 'none',
    maxWidth: '2rem',
  },
}));

export default useStyles;
