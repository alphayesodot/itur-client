import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '5rem',
    minWidth: '5rem',
    marginRight: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.2%',
    paddingBottom: '1.5%',
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '100%',
      minHeight: '3em',
      height: '3em',
      marginRight: 'auto',
      marginBottom: '1rem',
      padding: '0.5rem 0',
      overflowX: 'auto',
    },
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconImg: {
    height: '2rem',
    width: '2rem',
    '&:hover,&:focus': {
      transform: 'rotate(10deg)',
      transitionDuration: '0.2s',
    },
  },
  iconTitle: {
    fontSize: '0.8rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconLink: {
    marginTop: '1.5rem',
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
