import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    alignSelf: 'center',
    maxHeight: '75%',
    height: '75%',
    width: '85%',
    overflowY: 'auto',
  },
  input: {
    pointerEvents: 'none',
  },
}));

export default useStyles;
