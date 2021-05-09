import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '35rem',
    width: '30rem',
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
    padding: '1.5rem',
  },
  closeButton: {
    transform: 'rotate(45deg)',
    '&:hover,&:focus': {
      backgroundColor: 'white',
    },
    closeIcon: {
      height: '0.8rem',
      width: '0.8rem',
    },
    usersTitle: {
      fontWeight: 'bold',
      backgroundColor: 'red',
    },
  },

}));

export default useStyles;
