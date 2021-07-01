import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  select: {
    direction: 'ltr',
    // padding: '1em',
  },
  icon: {
    fill: '#9aa3aa',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '10%',
    },
  },
}));

export default useStyles;
