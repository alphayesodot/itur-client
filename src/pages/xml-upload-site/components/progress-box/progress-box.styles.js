import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    width: '40%',
    margin: 'auto',
    fontSize: '0.7rem',
    borderRadius: '0.5em',
    boxShadow: '0 0.3em 0.6em rgba(0,0,0,0.16), 0 0.3em 0.6em rgba(0,0,0,0.23)',
  },
  horizonBox: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  typography: {
    fontSize: '0.7rem',
    color: theme.palette.section.main,
  },
  progressBar: {
    // color: theme.palette.section.main,
  }

}));

export default useStyles;
