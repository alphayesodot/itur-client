import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '33rem',
    maxHeight: '22rem',
    overflowY: 'auto',
    margin: 'auto',
    padding: 'auto 0',
  },
  progressBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem auto',
    width: '90%',
    padding: '0',
  },
  upload: {
    margin: '0',
    padding: ' 0.5%  0 0.5% 3%',
    background: 'white',
    fontSize: '0.8rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    borderRadius: '0.5em',
    width: '80%',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'rgb(234,243,246)',
    color: theme.palette.section.primary,
    padding: '0.03rem',
  },
  closeIcon: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    margin: '0.15rem',
  },
  typography: {
    fontSize: '0.7rem',
    fontFamily: theme.typography.fontFamily,
    color: 'gray',
    marginBottom: '0.4rem',
    textAlign: 'left',
  },
  progressBar: {
    backgroundColor: 'rgb(234,243,246)',
    borderRadius: 35,
  },
  progressBarColor: {
    backgroundColor: theme.palette.section.primary,
  },
  xmlImg: {
    marginRight: '0.5rem',
  },
  noneLi: {
    listStyleType: 'none',
  },
  loader: {
    color: theme.palette.section.primary,
    size: 100,
  },
}));

export default useStyles;
