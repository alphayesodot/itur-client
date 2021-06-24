import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    height: '100%',
    width: 'calc(100% - 5.5vw)',
    minWidth: 'calc(100% - 5.5vw)',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      width: '100%',
    },
  },
  title: {
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  },
  countTitle: {
    color: theme.palette.font.secondary,
  },
  content: {
    padding: '2.5em',
    textAlign: 'left',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
  },
  dashbord: {
    width: '100%',
    height: '90%',
    marginTop: '1rem',
    direction: 'ltr',
    alignItems: 'center',
  },
  tableContainer: {
    height: '80%',
    width: '70%',
    margin: 'auto',
  },
  emptyTable: {
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: 'lightGray',
  },
  viewContainer: {
    maxHeight: '80%',
    direction: 'rtl',
    width: '50%',
    margin: '0 2.5em',
  },
}));

export default useStyles;
