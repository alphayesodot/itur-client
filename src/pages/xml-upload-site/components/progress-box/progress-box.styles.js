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
    // color: {
      // primary: theme.palette.section.main,
      // secondary: theme.palette.section.primar
    // },
    // backgroundColor: theme.palette.section.main,
    backgroundColor: theme.palette.section.primary,
    // backgroundColor: theme.palette.section.primary,
  }

}));

export default useStyles;
