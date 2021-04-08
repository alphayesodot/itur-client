import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  addUsersTitle: {
    fontSize: '1.5rem',
    fontColor: theme.palette.section.main,
    direction: 'rtl',
    width: '11rem',
    marginLeft: '95rem',
    margin: '2rem',
  },
  addUnitButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    width: '17rem',
    height: '3rem',
    fontSize: '1rem',
    marginLeft: '88.5rem',
    marginTop: '1.2rem',
  },
  unitsTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginLeft: '9rem',
  },
}));

export default useStyles;
