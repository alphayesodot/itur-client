import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    width: '100%',
    height: '100%',
    marginTop: '1em',
    paddingBottom: '0.5em',
  },
  date: {
    padding: '2em 3em',
    height: '1em',
    fontWeight: '800',
    textAlign: 'left',
  },
  list: {
    display: 'flex',
    flexDirection: 'row-reverse',
    overflowX: 'auto',
    marginRight: '1.3em',
    marginLeft: '1.3em',
  },
  item: {
    minWidth: '17.5rem',
    width: '17.5rem',
    height: 'calc(100vh - 23em)',
    minHeight: '20em',
  },
  message: {
    fontSize: '1.25em',
    textAlign: 'center',
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
