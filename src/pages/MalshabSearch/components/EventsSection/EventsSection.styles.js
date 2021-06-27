import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '2%',
    width: '100%',
    minHeight: '100%',
    display: 'flex',
  },
  mainDiv: {
    width: '100%',
  },
  calenderDiv: {
    width: '50%',
    marginRight: '3%',
  },
  sectionTitle: {
    userSelect: 'none',
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '1rem',
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
  },
}));

export default useStyles;
