import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '35rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    height: '5%',
  },
  closeButton: {
    transform: 'rotate(45deg)',
    backgroundColor: 'transparent',
    '&:hover,&:focus': {
      backgroundColor: 'white',
    },
  },
  closeIcon: {
    height: '1rem',
    width: '1rem',
  },
  usersTitle: {
    fontWeight: 'bold',
  },
  titles: {
    marginRight: '0.5rem',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: '30%',
    height: '52.5%',
    borderRadius: 15,
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  mainDiv: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%',
  },
}));

export default useStyles;
