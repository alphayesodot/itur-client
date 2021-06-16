import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    borderRadius: 30,
    height: '2em',
    width: '15em',
    padding: '0.25em 1.3em',
    background: 'white',
    borderBottom: 'none',
    margin: '0 1em',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
}));

export default useStyles;
