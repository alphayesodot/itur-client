import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '18rem',
    overflowY: 'hidden',
    position: 'relative',
    marginRight: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      overflowX: 'hidden',
      height: '100%',
      minHeight: '22rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '0rem',
      marginRight: '0rem',
      borderRadius: '1rem',
      marginBottom: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35rem',
    },
  },
  unitsTitle: {
    color: 'white',
    fontSize: '0.98rem',
    fontFamily: theme.typography.fontFamily,
    marginTop: '10%',
    marginLeft: '3rem',
    direction: 'ltr',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      fontWeight: 500,
      marginLeft: '0',
      marginTop: '1rem',
    },
  },
  unitsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '62.9%',
    overflowY: 'auto',
    direction: 'rtl',
    color: 'rgb(141 148 155 / 0.31)',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row-reverse',
      overflowX: 'auto',
      overflowY: 'hidden',
      width: '44rem',
      height: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
      height: '17rem',
    },
  },
  addUsersTitle: {
    fontSize: '1.3rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '3rem',
    marginBottom: '-1rem',
    marginRight: '3rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1.2rem',
      marginTop: '0rem',
      fontSize: '1.2rem',
    },
  },
  addUsersDiv: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      width: '100%',
    },
  },
  addUnitButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    width: '12rem',
    minHeight: '2.5rem',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
      height: '2.9rem',
    },
  },
  addUnitDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  noUnits: {
    paddingTop: '3rem',
    fontWeight: '2rem',
    fontSize: 20,
  },
  unitsCountDiv: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      width: '100%',
      marginLeft: '1.2rem',
    },
  },
}));

export default useStyles;
