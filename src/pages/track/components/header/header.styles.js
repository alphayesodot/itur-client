import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: '95%',
    height: '3.5em',
    padding: '1.25em',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '35%',
  },
  unit: {
    color: 'white',
    fontSize: '1em',
  },
  select: {
    width: '10em',
    height: '2.5em',
    background: 'white',
    borderRadius: 30,
  },
  icon: {
    fill: '#9aa3aa',
    width: '180%',
  },
  nodeGroup: {
    direction: 'rtl',
  },
  date: {
    borderRadius: 30,
    height: '2em',
    padding: '0.25em',
    paddingLeft: '6em',
    background: 'white',
  },
  button: {
    background: theme.palette.primary.secondary,
    borderRadius: 30,
    padding: '0.4em 2em',
  },
}));

export default useStyles;
