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
    height: '2.5rem',
    width: '14rem',
    padding: '0.4em',
    fontSize: '1rem',
    borderRadius: 30,
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    direction: 'rtl',
    placeholder: 'hello',
  },
}));

export default useStyles;
