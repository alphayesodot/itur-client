import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '12rem',
    height: '2.5rem',
    background: 'white',
    borderRadius: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '&:hover,&:focus': {
      boxShadow: `inset 0 0 0 0.15em ${theme.palette.secondary.main}`,
    },
  },
}));

export default useStyles;
