import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    height: '2em',
    width: '15em',
    background: 'white',
    borderBottom: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
}));

export default useStyles;
