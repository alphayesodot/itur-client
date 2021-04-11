import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '1.25em',
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
    fontSize: '1.15em',
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
    borderBottom: 'none',
  },
  button: {
    background: theme.palette.primary.secondary,
    borderRadius: 30,
    padding: '0.4em 2em',
    '&:hover': {
      background: 'white',
    },
  },
}));

export default useStyles;
