import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '70%',
    padding: '7rem 3rem',
    margin: '3rem auto',
  },
}));

export default useStyles;
