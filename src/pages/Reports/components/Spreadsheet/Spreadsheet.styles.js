import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
  },
  input: {
    pointerEvents: 'none',
  },
  content: {
    width: '90%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    width: '90%',
    margin: '2% 0',
    userSelect: 'none',
  },
  message: {
    height: '100%',
    paddingTop: '6rem',
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: 700,
    color: 'lightgrey',
    userSelect: 'none',
  },
}));

export default useStyles;
