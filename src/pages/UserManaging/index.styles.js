import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
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
    width: '100%',
  },
  paper: {
    borderRadius: 15,
  },
}));

export default useStyles;
