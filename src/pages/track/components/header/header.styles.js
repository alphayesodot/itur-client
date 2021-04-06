import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: '95%',
    height: '3.5em',
    padding: '1em',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    direction: 'rtl',
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
}));

export default useStyles;
