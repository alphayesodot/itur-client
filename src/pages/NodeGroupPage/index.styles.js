import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
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
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    marginTop: '1rem',
    direction: 'ltr',
  },
  tableContainer: {
    height: '80%',
  },
}));

export default useStyles;
