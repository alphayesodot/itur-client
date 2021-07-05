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
  input: {
    border: 'solid 2px',
    borderColor: theme.palette.dialog.secondaryMid,
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0 1rem',
    boxSizing: 'border-box',
    marginTop: '0.1rem',
    maxWidth: '7rem',
  },
  minMax: {
    marginRight: '1rem',
  },
}));

export default useStyles;
