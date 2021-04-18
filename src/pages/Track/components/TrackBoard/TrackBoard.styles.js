import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    width: '95%',
    height: '70vh',
    marginTop: '1em',
    paddingBottom: '0.5em',
  },
  date: {
    padding: '2em 3em',
    height: '1em',
    fontWeight: '700',
  },
  list: {
    display: 'flex',
    overflowX: 'auto',
    height: 'calc(100% - 7em)',
    marginRight: '1.3em',
    marginLeft: '1.3em',
  },
  item: {
    minWidth: '19em',
    width: '19em',
    height: '100%',
    '&:first-child': {
      paddingRight: '0',
      minWidth: '18em',
    },
    '&:last-child': {
      paddingLeft: '0',
      minWidth: '18em',
    },
  },
}));

export default useStyles;
