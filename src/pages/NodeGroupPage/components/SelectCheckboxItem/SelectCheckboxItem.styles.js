import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0.2rem auto',
    '&:focus': {
      '&::before': {
        borderBottom: 'none !important',
      },
    },
  },
  input: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    borderRadius: '4px',
    '&::before': {
      borderBottom: 'none !important',
    },
    '&:hover': {
      border: '1px solid black',
    },
    '&::after': {
      borderBottom: 'none !important',
    },
    fontSize: '1rem',
    width: '100%',
    padding: '0.4rem 1.5rem 0.4rem 0.25rem',
    fontFamily: theme.typography.fontFamily,
  },
  selectInput: {
    '&:focus': {
      borderBottom: 'none !important',
      backgroundColor: 'transparent',
    },
  },
  checkbox: {
    '&$checkedCheckbox': {
      color: theme.palette.dialogs.primary,
    },
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checkedCheckbox: {
  },
  selectedMenuItem: {
    backgroundColor: 'transparent !important',
  },
}));

export default useStyles;
