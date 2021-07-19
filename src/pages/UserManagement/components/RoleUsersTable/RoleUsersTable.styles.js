import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    paddingRight: '2rem',
    width: '60%',
    height: '15rem',
    direction: 'rtl',
  },
  cell: {
    fontWeight: 'bold',
  },
  mail: {
    wordBreak: 'break-all',
  },
}));

export default useStyles;
