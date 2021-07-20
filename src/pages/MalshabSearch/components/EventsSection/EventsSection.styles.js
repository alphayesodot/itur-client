import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '2%',
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
  mainDiv: {
    width: '100%',
    minHeight: '18rem',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
    },
  },
  calenderDiv: {
    minWidth: '16rem',
    marginRight: '3%',
    paddingLeft: '7%',
    minHeight: '18rem',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '4%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      paddingLeft: '0',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    background: theme.palette.table.main,
    width: '100%',
    height: '95%',
    maxHeight: '15rem',
    minHeight: '7rem',
  },
  eventRow: {
    width: '90%',
    padding: '1%',
  },
  iconButton: {
    width: '1.25rem',
    height: '1.25rem',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    whiteSpace: 'pre',
  },
  divider: {
    width: '100%',
  },
  message: {
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: theme.palette.primary.main,
  },
  sectionTitle: {
    userSelect: 'none',
    fontWeight: '900',
    paddingLeft: '1%',
  },
  checkboxSection: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '20%',
  },
  checkbox: {
    height: '0.2rem',
  },
  showAllText: {
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  sectionMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
  },
  progress: {
    margin: 'auto',
  },
}));

export default useStyles;
