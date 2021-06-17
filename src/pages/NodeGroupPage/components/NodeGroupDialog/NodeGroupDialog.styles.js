import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.9rem',
  },
  popup: {
    padding: '1rem',
    borderRadius: '15px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeIcon: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.font.secondary,
    },
  },
  label: {
    margin: '0.1rem',
  },
  labeledInput: {
    margin: '1rem',
  },
  actions: {
    margin: 'auto',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: theme.palette.dilogs.primary,
    borderRadius: '25px',
    padding: '0.5rem 1rem',
    color: 'white',
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.dilogs.primary,
      border: `1px solid ${theme.palette.dilogs.primary}`,
    },
  },
  inputsLine: {

  },
}));

export default useStyles;
