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
    fontWeight: '!important bold',
  },
  dashbord: {
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    marginTop: '1rem',
    direction: 'ltr',
    alignItems: 'stretch',
  },
  infoContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    height: '90%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  emptyTable: {
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: 'lightGray',
  },
  noQuestionnaire: {
    maxHeight: '80%',
    direction: 'rtl',
    width: '50%',
    margin: '0 2.5em',
  },
  tableContainer: {
    maxHeight: 'calc(100vh - 25rem)',
    width: '48%',
    paddingLeft: '2.5em',
    marginRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: '1.5rem',
      paddingLeft: '0',
      maxHeight: '25vh',
    },
  },
  previewContainer: {
    maxHeight: 'calc(100vh - 25rem)',
    width: '43%',
    paddingRight: '2.5em',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: '1.5rem',
      maxHeight: '25vh',
    },
  },
}));

export default useStyles;
