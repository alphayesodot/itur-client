import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.7rem',
  },
  unitName: {
    direction: 'rtl',
    fontSize: '1.2rem',
    fontFamily: 'Rubik, sans-serif',
    color: 'white',
    marginTop: '1.3rem',
    marginRight: '2rem',
  },
  numberOfUsers: {
    direction: 'rtl',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    color: 'rgb(125, 131, 137)',
    marginTop: '-0.5rem',
    fontFamily: 'Rubik, sans-serif',
    marginRight: '2rem',
  },

}));

export default useStyles;
