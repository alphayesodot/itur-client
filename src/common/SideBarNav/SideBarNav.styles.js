import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '5rem',
    marginLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.2%',
    paddingBottom: '1.5%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '100%',
      marginLeft: 'auto',
      marginBottom: '1rem',
      padding: '0.5rem 0',
    },
  },
  icons: {
    marginTop: '2rem',
    '&:hover,&:focus': {
      transform: 'rotate(-10deg)',
      transitionDuration: '0.2s',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto 1rem',
    },
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
}));

export default useStyles;
