import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 1em',
    [theme.breakpoints.down('sm')]: {
      margin: '0.5em 0',
      alignSelf: 'stretch',
    },
    '&:hover,&:focus': {
      boxShadow: `inset 0 0 0 0.15em ${theme.palette.secondary.main}`,
    },
  },
  date: {
    borderRadius: 30,
    height: '2em',
    width: '15em',
    padding: '0.25em 1.3em',
    background: 'white',
    borderBottom: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
}));

export default useStyles;
