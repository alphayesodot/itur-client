import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0.7rem',
    direction: 'ltr',
    [theme.breakpoints.down('md')]: {
      marginRight: '0.7rem',
      marginTop: '0rem',
    },
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0rem',
      marginTop: '0.5rem',
    },
  },
  unitName: {
    fontSize: '1.1rem',
    fontFamily: 'Rubik, sans-serif',
    color: 'white',
    marginTop: '1.3rem',
    marginLeft: '2rem',
    maxWidth: '8rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  numberOfUsers: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    color: 'rgb(125, 131, 137)',
    marginTop: '-0.5rem',
    fontFamily: 'Rubik, sans-serif',
    marginLeft: '2rem',
  },
  selectedCardText: {
    direction: 'rtl',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    color: 'white',
    marginTop: '-0.5rem',
    fontFamily: 'Rubik, sans-serif',
    marginLeft: '2rem',
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
