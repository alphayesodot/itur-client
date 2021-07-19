import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    minHeight: '100%',
    background: 'white',
    direction: 'ltr',
    paddingLeft: '1rem',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 1rem) !important',
      marginTop: '0.5rem !important',
    },
  },
}));

export default useStyles;
