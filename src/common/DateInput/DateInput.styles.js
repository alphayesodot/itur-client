import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    minHeight: '100%',
    width: '12.5em',
    background: 'white',
    direction: 'ltr',
    paddingLeft: '1rem',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
  },
}));

export default useStyles;
