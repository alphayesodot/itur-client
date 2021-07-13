import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: '25rem',
    paddingBottom: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    paddingBottom: '1rem',
  },
  buttonSet: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  optionButton: {
    margin: '1rem',
    borderRadius: '25px',
    fontWeight: 'bold',
    border: '1px solid',
    padding: '0.5rem 2rem',
  },
  yes: {
    color: 'red',
    borderColor: 'red',
    '&:hover': {
      color: 'white',
      backgroundColor: 'red',
      border: '1px solid red',
    },
  },
  no: {
    color: 'green',
    borderColor: 'green',
    '&:hover': {
      color: 'white',
      backgroundColor: 'green',
      border: '1px solid green',
    },
  },
}));

export default useStyles;
