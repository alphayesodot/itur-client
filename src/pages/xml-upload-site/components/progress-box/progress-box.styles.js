import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    fontSize: '40%',
    borderRadius: '0.5em',
    boxShadow: '0 0.3em 0.6em rgba(0,0,0,0.16), 0 0.3em 0.6em rgba(0,0,0,0.23)',
  },
  typography: {
    fontSize: '10%',
    color: theme.palette.section.main,
  },
  progressBar:{
    // color: theme.palette.section.main,
  }

}));

export default useStyles;
