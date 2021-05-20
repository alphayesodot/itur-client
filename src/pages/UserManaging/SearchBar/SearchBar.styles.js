import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    direction: 'rtl',

  },
  input: {
    height: '1.5rem',
    width: '10rem',
    fontSize: '0.8rem',
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    padding: '0.3rem',
    direction: 'ltr',
    [theme.breakpoints.down('md')]: {
      height: '2rem',
      width: '94%',
      fontSize: '1.2rem',
    },
  },
  searchDiv: {
    backgroundColor: 'white',
    height: '2.7rem',
    width: '14rem',
    display: 'flex',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: '2.7rem',
    [theme.breakpoints.down('md')]: {
      width: '98%',
      height: '3rem',
    },
  },
  searchLogoDiv: {
    margin: '0.8rem',
  },
}));

export default useStyles;
