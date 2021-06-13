import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginRight: '2rem',
    width: '50%',
    backgroundColor: 'white',
    padding: '1.5rem 1.9rem 1.5rem 1.9rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginBottom: '2rem',
      width: '100%',
      height: '65%',
      padding: '0',
    },
  },
  malshabimTopRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  malshabimText: {
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
      paddingLeft: '0.5rem',
    },
  },
  formControlNameOrId: {
    paddingLeft: '0.38rem',
  },
  formNameOrIdInputText: {
    fontWeight: '300',
    width: '10.6rem',
  },
  formNameOrIdInputLabel: {
    '&.Mui-focused': {
      color: '#27b9d1',
    },
  },
  selectUsers: {
    width: '5rem',
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    paddingLeft: '0.38rem',
  },
  isScheduled: {
    width: '6rem',
    '& label.Mui-focused': {
      color: '#27b9d1',
    },
    paddingLeft: '0.38rem',
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
  button: {
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
    width: '8rem',
    height: '2.5rem',
    borderRadius: '8px',
    padding: '0 0.6em',
  },
  selectionBox: {
    display: 'flex',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
    paddingRight: '1em',
    // fontSize: '14px',
    // lineHeight: '16px',
    // fontWeight: '200',
  },
}));

export default useStyles;
