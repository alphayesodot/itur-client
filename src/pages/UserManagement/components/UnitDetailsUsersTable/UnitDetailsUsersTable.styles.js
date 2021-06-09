import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    width: '65vw',
    marginTop: '2rem',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  tableHeadLine: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
