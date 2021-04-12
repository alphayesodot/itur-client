import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    direction: 'rtl',
    fontFamily: 'Rubik, sans-serif',
    fontSize: '1.3rem',
  },
  homeLogo: {
    margin: '1rem',
    marginTop: '1.3rem',
  },
  main: {
    marginRight: '5rem',
    display: 'flex',
  },
  usersLogo: {
    margin: '1rem',
    marginTop: '0.9rem',
  },
}));

export default useStyles;
