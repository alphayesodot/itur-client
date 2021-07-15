import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    paddingRight: '2rem',
    width: '80%',
    direction: 'rtl',
    height: '15rem',
  },
  cell: {
    fontWeight: 'bold',
  },
  mail: {
    wordBreak: 'break-all',
  },
}));

export default useStyles;
