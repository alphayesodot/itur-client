import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    height: '2em',
    maxHeight: '2em',
    minHeight: '2em',
    width: '12.5em',
    background: 'white',
    direction: 'ltr',
    paddingLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
}));

export default useStyles;
