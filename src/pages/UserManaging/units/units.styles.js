import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  units: {
    backgroundColor: theme.palette.primary.main,
    width: '18rem',
    marginLeft: '3.5rem',
    marginRight: '2rem',
  },
  unitsTitle: {
    color: 'white',
    fontSize: '0.98rem',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginLeft: '11rem',
  },
  unitsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '34.5rem',
    overflowY: 'hidden', // auto ?
  },
  addUsersTitle: {
    fontSize: '1.3rem',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    direction: 'rtl',
    marginTop: '3rem',
    marginBottom: '-1rem',
    marginLeft: '3rem',
  },
  addUsersDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  addUnitButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    width: '12rem',
    height: '2.5rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    direction: 'rtl',
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
    },
  },
  addUnitDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  },
  noUnitsDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(141 148 155 / 0.31)',
    fontWeight: '2rem',

  },
  noUnits: {
    fontSize: 20,
  },
}));

export default useStyles;
