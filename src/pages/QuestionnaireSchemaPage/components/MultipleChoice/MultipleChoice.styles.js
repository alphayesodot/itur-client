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
  deleteButton: {
    padding: 0,
  },
  deleteIcon: {
    width: '1rem',
    '&:hover': {
      color: theme.palette.dialog.primary,
    },
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {
    '&$checked': {
      color: theme.palette.dialog.primary,
    },
    '&$checked + $track': {
      backgroundColor: theme.palette.dialog.primary,
    },
  },
  track: {},
  switchLabel: {
    direction: 'rtl',
    margin: 0,
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checked: {},
  answers: {
    color: theme.palette.dialog.secondary,
  },
}));

export default useStyles;
