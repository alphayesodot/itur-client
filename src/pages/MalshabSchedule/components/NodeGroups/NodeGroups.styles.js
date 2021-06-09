import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDiv: {
    height: '90%',
    maxHeight: '45rem',
    width: '70%',
    padding: '0 15%',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
}));

export default useStyles;
