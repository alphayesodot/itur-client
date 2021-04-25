import { makeStyles } from '@material-ui/core/styles';
import apptheme from '../../theme';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: apptheme.palette.primary.main,
    height: '6rem',
  },
  toolbar: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.1rem',
  },
  blessing: {
    marginRight: '0.5rem',
    marginLeft: '0.8rem',
  },
  notForMobile: {
    '@media (max-width:500px)': {
      display: 'none',
    },
  },
  menuButton: {
    height: '2.3rem',
    width: '2.3rem',
    margin: '0 0.5rem',
    '& .MuiSvgIcon-root': {
      width: '1.5em',
      height: '1.5em',
    },
  },
  secondary: {
    color: apptheme.palette.primary.secondary,
  },
}));

export default useStyles;
