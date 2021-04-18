import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    width: '95%',
    height: '65vh',
    marginTop: '1em',
  },
  date: {
    direction: theme.direction,
    padding: '2.5em 3em',
    height: '1em',
    fontWeight: '700',
  },
  list: {
    display: 'flex',
    overflowX: 'scroll',
    height: 'calc(100% - 7em)',
  },
  item: {
    minWidth: '16.5%',
    height: '100%',
  },
}));

export default useStyles;
