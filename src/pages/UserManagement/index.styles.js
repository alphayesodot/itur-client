import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    },
  },
  root: {
    display: 'flex',
    width: '100%',
  },
}));

export default useStyles;
