import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'pre',
    flexWrap: 'wrap',
  },
  avatar: {
    padding: '1rem',
  },
  separation: {
    fontWeight: '700',
    padding: '0.5rem',
  },
}));

export default useStyles;
