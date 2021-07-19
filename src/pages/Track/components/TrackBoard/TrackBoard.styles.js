import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em',
    paddingBottom: '0.5em',
    minHeight: '25rem',
  },
  date: {
    padding: '2em 3em',
    height: '1em',
    fontWeight: '800',
    width: '95%',
    textAlign: 'left',
  },
  list: {
    display: 'flex',
    flexDirection: 'row-reverse',
    overflowX: 'auto',
    height: '100%',
    width: 'calc(100vw - 15rem)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 6rem)',
    },
  },
  item: {
    minWidth: '17.5rem',
    width: '17.5rem',
    height: 'calc(100vh - 23em)',
    minHeight: '20em',
  },
}));

export default useStyles;
