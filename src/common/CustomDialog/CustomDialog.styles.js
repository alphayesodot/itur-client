import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    height: '5%',
  },
  title: {
    direction: 'rtl',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  closeButton: {
    transform: 'rotate(45deg)',
    backgroundColor: 'transparent',
    '&:hover,&:focus': {
      backgroundColor: 'white',
    },
  },
  closeImg: {
    height: '1.1rem',
    width: '1.1rem',
  },
  paper: {
    borderRadius: 15,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      width: '28%',
    },
  },
}));

export default useStyles;
