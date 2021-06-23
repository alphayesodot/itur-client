import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '97%',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.5rem',
    borderRadius: 15,
    margin: '0.5rem auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'end',
      height: '10rem',
    },
  },
  time: {
    marginLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 'auto',
    },
  },
  name: {
    fontWeight: '800',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  identityNumber: {
    width: '80%',
    color: theme.palette.font.secondary,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  identityNumberDURING: {
    color: 'white',
  },
  iconButton: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '8%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '3%',
    },
  },
  icon: {
    width: '5%',
  },
  iconsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      width: '100%',
    },
  },
  button: {
    background: theme.palette.primary.secondary,
    borderRadius: 30,
    width: '5rem',
    marginRight: '7%',
    fontWeight: '800',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.secondary,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '1%',
    },
  },
  disabled: {
    background: '#aab5b9',
    color: `${theme.palette.primary.main} !important`,
  },
  dialogTitle: {
    width: '35%',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    fontSize: '1.5rem',
  },
  dialogPaper: {
    minWidth: '70%',
    minHeight: '70%',
  },
  infoIcon: {
    width: '1.75rem',
    height: '1.75rem',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
}));

export default useStyles;
