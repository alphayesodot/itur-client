import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  topRowText: {
    width: '90%',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
      paddingLeft: '0.5rem',
    },
  },
  usersList: {
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '90%',
    overflow: 'auto',
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
  disabled: {
    backgroundColor: theme.palette.scrollbar.main,
  },
}));

export default useStyles;
