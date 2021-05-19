import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
  },
  searchDiv: {
    backgroundColor: 'white',
    height: '2.7rem',
    width: '14rem',
    display: 'flex',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: '2.7rem',
  },
  searchLogoDiv: {
    margin: '0.8rem',
  },
}));

export default useStyles;
