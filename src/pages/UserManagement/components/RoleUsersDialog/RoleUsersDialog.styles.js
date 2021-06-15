import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    height: '20rem',
    flex: 1,
  },
  mainDiv: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%',
  },
}));

export default useStyles;
