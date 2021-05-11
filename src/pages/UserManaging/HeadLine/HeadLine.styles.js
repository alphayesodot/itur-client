import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'rtl',
    fontFamily: 'Rubik, sans-serif',
    fontSize: '1.1rem',
  },
  mainDiv: {
    backgroundColor: theme.palette.primary.main,
    width: '80rem',
    height: '4rem',
    marginTop: '4rem',
    color: 'white',
  },
  homeLogo: {
    margin: '1rem',
    marginTop: '1.4rem',
  },
  main: {
    marginRight: '5rem',
    display: 'flex',
  },
  usersLogo: {
    margin: '1rem',
    marginTop: '1rem',
  },
  mainDivText: {
    marginTop: '1.5rem',
  },

}));

export default useStyles;
