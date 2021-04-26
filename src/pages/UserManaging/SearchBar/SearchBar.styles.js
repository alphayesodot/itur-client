import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.1rem',
  },
  input: {
    height: '1.5rem',
    width: '10rem',
    fontSize: '0.9rem',
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    direction: 'rtl',
    padding: '0.2rem',
  },
  searchDiv: {
    backgroundColor: 'white',
    height: '2.7rem',
    width: '14rem',
    display: 'flex',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '2.7rem',
  },
  searchLogoDiv: {
    margin: '0.7rem',
  },
}));

export default useStyles;
