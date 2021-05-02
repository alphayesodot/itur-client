import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    width: '100%',
    height: '75vh',
    marginTop: '1em',
    paddingBottom: '0.5em',
  },
  date: {
    padding: '2em 3em',
    height: '1em',
    fontWeight: '800',
  },
  list: {
    display: 'flex',
    overflowX: 'auto',
    height: 'calc(100% - 7em)',
    marginRight: '1.3em',
    marginLeft: '1.3em',
  },
  item: {
    minWidth: '18em',
    width: '18em',
    height: '100%',
  },
  message: {
    fontSize: '1.25em',
    textAlign: 'center',
    width: '100%',
  },
}));

export default useStyles;
