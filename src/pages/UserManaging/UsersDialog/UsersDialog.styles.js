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
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    borderRadius: 30,
    width: '75%',
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
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
  },
  noUsersDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  noUsers: {
    fontWeight: 'bold',
    color: 'lightgrey',
    fontSize: '1.3rem',
  },
}));

export default useStyles;
