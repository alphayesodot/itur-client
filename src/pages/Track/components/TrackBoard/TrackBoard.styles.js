import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    width: '95%',
    height: '65vh',
    marginTop: '1em',
  },
  date: {
    direction: 'rtl',
    padding: '2.5em 3em',
    height: '1em',
    fontWeight: '700',
  },
  grid: {
    width: '100%',
    height: 'calc(100% - 6em)',
    margin: 'auto',
    overflowX: 'scroll',
  },
}));

export default useStyles;
