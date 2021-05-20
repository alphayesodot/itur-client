import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '90vw',
      alignItems: 'center',
    },
  },
  mainDiv: {
    display: 'flex',
  },
  paper: {
    borderRadius: 15,
  },
}));

export default useStyles;
