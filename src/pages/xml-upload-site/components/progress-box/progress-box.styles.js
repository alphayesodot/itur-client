import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem auto',
    padding: ' 0.5% 3%',
    background: 'white',
    width: '34%',
    fontSize: '0.7rem',
    borderRadius: '0.5em',
    boxShadow: '0 0.3em 0.6em rgba(0,0,0,0.16), 0 0.3em 0.6em rgba(0,0,0,0.23)',

  },
  infoBox: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse'
  },
  fileName: {
    display: 'flex',
    alignItems: 'center'
  },
  typography: {
    fontSize: '0.7rem',
    color: theme.palette.section.main,
  },
  progressBar: {
    backgroundColor: theme.palette.section.primary,
  }

}));

export default useStyles;
