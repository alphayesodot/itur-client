import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2rem',
    boxShadow: 'none',
    paddingRight: '2rem',
    width: '60%',
    alignSelf: 'center',
  },
  cell: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
