import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0.7rem',
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'rtl',
    width: '100%',
  },
  unitName: {
    direction: 'rtl',
    fontSize: '1.1rem',
    fontFamily: 'Rubik, sans-serif',
    color: 'white',
    marginTop: '1.3rem',
    marginRight: '2rem',
    overflow: 'hidden',
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
  selectedCardText: {
    direction: 'rtl',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    color: 'white',
    marginTop: '-0.5rem',
    fontFamily: 'Rubik, sans-serif',
    marginRight: '2rem',
  },
  card: {
    backgroundColor: '#203141',
    height: '5rem',
    width: '14rem',
  },
  chooseIcon: {
    height: '1rem',
    width: '1rem',
  },
  selectedCard: {
    backgroundColor: theme.palette.section.primary,
    height: '5rem',
    width: '14rem',
  },

}));

export default useStyles;
