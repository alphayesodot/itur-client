import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
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
    fontFamily: theme.typography.fontFamily,
    marginRight: '0.5rem',
    marginLeft: '0.8rem',
    userSelect: 'none',
  },
  notForMobile: {
    [theme.breakpoints.down('sm')]: {
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
    color: theme.palette.primary.secondary,
  },
  select: {
    backgroundColor: 'white',
    width: '15rem',
    margin: '0 0.5rem',
    borderRadius: '15px',
    padding: '0.2rem 0',
  },
}));

export default useStyles;
