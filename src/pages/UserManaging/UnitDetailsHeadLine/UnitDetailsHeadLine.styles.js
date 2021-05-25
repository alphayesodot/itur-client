import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'ltr',
    fontFamily: 'Rubik, sans-serif',
    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  mainDiv: {
    backgroundColor: theme.palette.primary.main,
    width: '65vw',
    height: '4.2rem',
    marginTop: '4rem',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
  },
  homeLogo: {
    margin: '1rem',
    marginTop: '1.4rem',
  },
  main: {
    marginLeft: '5rem',
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
