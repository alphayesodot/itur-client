import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginRight: '2rem',
    width: '100%',
    backgroundColor: 'white',
    padding: '1.5rem 1.9rem 1.5rem 1.9rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
      width: '100%',
      height: '65%',
      minHeight: '30rem',
      padding: '0',
    },
  },
  malshabimTopRow: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '1rem',
    flexWrap: 'wrap',
    height: '12.5%',
  },
  malshabimText: {
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    marginRight: 'auto',
    '& span': {
      fontWeight: '200',
      paddingLeft: '0.5rem',
    },
  },
  formControlNameOrId: {
    paddingLeft: '0.38rem',
  },
  formNameOrIdInputText: {
    marginRight: '0.5em',
    fontWeight: '300',
    width: '7.5rem',
  },
  formNameOrIdInputLabel: {
    '&.Mui-focused': {
      color: theme.palette.textField.focused,
    },
  },
  input: {
    borderRadius: '9px',
  },
  selectUsers: {
    marginRight: '0.5em',
    width: '5rem',
  },
  selectScheduled: {
    width: '7rem',
  },
  selectHour: {
    marginRight: '0.5rem',
    width: '6rem',
  },
  bottomRow: {
    padding: '1.25em 2.8em',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    height: '10%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0px 0px 16px 16px',
  },
  confirmButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '20px',
    fontSize: '0.9rem',
    height: '2.5rem',
    width: '8rem',
    padding: '0 1.9rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
      opacity: 0.94,
    },
  },
  selectScheduling: {
    fill: 'white',
    backgroundColor: 'white',
    width: '10rem',
  },
  selectionBox: {
    display: 'flex',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
    paddingRight: '1em',
  },
}));

export default useStyles;
