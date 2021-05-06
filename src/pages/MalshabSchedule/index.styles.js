import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  formUnitHeader: {
    height: '5.5rem',
    width: '100%',
    display: 'block',
    marginBottom: '1rem',
    backgroundColor: '#0f2231',
  },
  mainInner: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: 'calc(100vh - 15em)',
    },
  },
  malshabimCard: {
    marginLeft: '2rem',
    height: '100%',
    width: '60%',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '100%',
      marginBottom: '1rem',
    },
    '& .topRow': {
      display: 'flex',
    },
  },
  usersCard: {
    width: '40%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
