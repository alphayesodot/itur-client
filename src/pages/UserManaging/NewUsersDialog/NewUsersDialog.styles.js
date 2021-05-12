import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
    direction: 'rtl',
    padding: '2rem',
  },
  closeButton: {
    transform: 'rotate(45deg)',
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
  headLine: {
    backgroundColor: '#f3f5f7',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    direction: 'rtl',
    marginRight: '1.5rem',
    marginLeft: '1.5rem',
    borderRadius: 30,
    width: '75%',
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  titles: {
    marginLeft: '0.5rem',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: '30%',
    height: '52.5%',
    borderRadius: 15,
  },

}));

export default useStyles;
