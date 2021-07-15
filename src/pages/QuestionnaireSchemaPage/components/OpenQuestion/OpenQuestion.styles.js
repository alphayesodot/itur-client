import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: '0.85rem',
    marginLeft: '0.2rem',
    color: theme.palette.dialog.secondary,
  },
  checkbox: {
    marginLeft: 0,
    paddingLeft: 0,
    '&$checkedCheckbox': {
      color: theme.palette.dialog.primary,
    },
  },
  // This object is needed although it's empty. It is needed for override the default color.
  checkedCheckbox: {
  },
}));

export default useStyles;
