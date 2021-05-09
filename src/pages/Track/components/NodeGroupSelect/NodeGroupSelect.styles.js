import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '12rem',
    height: '2.5em',
    background: 'white',
    borderRadius: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  item: {
    direction: 'rtl',
  },
  icon: {
    fill: '#9aa3aa',
    width: '180%',
  },
}));

export default useStyles;
