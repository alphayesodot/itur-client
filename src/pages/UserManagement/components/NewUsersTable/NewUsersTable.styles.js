import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    paddingRight: '2rem',
    width: '60%',
    direction: 'rtl',
    height: '15rem',
  },
  cell: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
