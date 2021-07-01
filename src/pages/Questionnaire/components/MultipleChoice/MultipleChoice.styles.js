import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.85rem',
    marginLeft: '0.2rem',
    color: theme.palette.dialog.secondary,
  },
  input: {
    border: 'solid 2px',
    borderColor: theme.palette.dialog.secondaryMid,
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '100%',
    padding: '0.1rem 1rem',
    marginBottom: '0.3rem',
  },
  radioContainer: {
    margin: '0.5rem',
  },
  deleteButton: {
    padding: 0,
  },
  deleteIcon: {
    width: '1rem',
    '&:hover': {
      color: theme.palette.dialog.primary,
    },
  },
  radio: {
    '&$checked': {
      color: theme.palette.dialog.primary,
    },
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checked: {},
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
