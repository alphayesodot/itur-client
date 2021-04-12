import { makeStyles } from '@material-ui/core/styles';
import apptheme from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: '6rem',
  },
  toolbar: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
  },
  notForMobile: {
    '@media (max-width:500px)': {
      display: 'none',
    },
  },
  menuButton: {
    height: '2rem',
    width: '2rem',
    margin: '0 0.5rem',
    '& .MuiSvgIcon-root': {
      width: '1.5em',
      height: '1.5em',
    },
  },
  interviewScheduleBtn: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '20px',
    width: '7rem',
    height: '2.6rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    marginRight: '2rem',
    '&:hover': {
      backgroundColor: '#cc9432',
      color: '#fff',
    },
  },
  toolbarBtn: {
    color: '#fff',
    margin: '0 1rem',
    '&:hover': {
      color: theme.palette.primary.secondary,
    },
  },
  secondary: {
    color: theme.palette.primary.secondary,
  },
  label: {
    transitionDuration: '0.3s',
  },
}));

export default useStyles;
