import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  unitsTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginLeft: '9rem',
  },
  units: {
    backgroundColor: theme.palette.primary.main,
    height: '45rem',
    width: '17rem',
    marginLeft: '3.5rem',
    marginTop: '-1rem',
  },
}));

export default useStyles;
