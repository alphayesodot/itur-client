import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    whiteSpace: 'pre',
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
