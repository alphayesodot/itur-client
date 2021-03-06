import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em',
      height: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
      background: theme.palette.scrollbar.secondary,
      'border-radius': '50em',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.scrollbar.main,
      'border-radius': '50em',
    },
  },
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    animation: '$backgroundFade 1.7s linear alternate',
    animationDelay: '0.35s',
  },
  logo: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    margin: 'auto',
    animation: '$logoFade 0.7s ease-out alternate',
  },
  '@keyframes backgroundFade': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  '@keyframes logoFade': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  bodyContainer: {
    display: 'flex',
    alignItems: 'stretch',
    paddingTop: '2rem',
    justifyContent: 'center',
    width: '95%',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    height: 'calc(100vh - 9rem)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  toastRoot: {
    background: theme.palette.primary.main,
    color: 'white',
    fontFamily: theme.typography.fontFamily,
    borderRadius: 10,
  },
  toastProgress: {
    background: theme.palette.secondary.main,
  },
}));

export default useStyles;
