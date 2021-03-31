import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  upload: {
    margin: 'auto',
    padding: ' 0.5% 3%',
    background: 'white',
    fontSize: '0.9rem',
    borderRadius: '0.5em',
    width: '70%',
  },
  infoBox: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cancelButton: {
    backgroundColor: 'rgb(234,243,246)',
    color: theme.palette.section.primary,
    padding: '0.03rem',
    marginBottom: '0.4rem',
  },
  typography: {
    fontSize: '0.7rem',
    color: 'gray',
    marginBottom: '0.4rem',
  },
  progressBar: {
    backgroundColor: theme.palette.section.primary,
  }

}));

export default useStyles;
