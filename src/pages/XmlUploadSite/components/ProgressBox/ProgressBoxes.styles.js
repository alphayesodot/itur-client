import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    maxHeight: '22rem',
    overflowY: 'auto',
    margin: 'auto',
    padding: 'auto 0',
  },
  progressBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '1rem 0',
    width: '100%',
    padding: '0'
  },
  upload: {
    margin: '0',
    padding: ' 0.5%  0 0.5% 3%',
    background: 'white',
    fontSize: '0.9rem',
    borderRadius: '0.5em',
    width: '80%',
  },
  infoBox: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cancelButton: {
    backgroundColor: 'rgb(234,243,246)',
    color: theme.palette.section.primary,
    padding: '0.03rem',
  },
  closeIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: '0.15rem'
  },
  typography: {
    fontSize: '0.7rem',
    color: 'gray',
    marginBottom: '0.4rem',
    textAlign: 'left'
  },
  progressBar: {
    backgroundColor: 'rgb(234,243,246)',
  },
  progressBarColor: {
    backgroundColor: theme.palette.section.primary,
  },
  xmlImg: {
    marginRight: '0.5rem',
  },
  noneLi: {
    listStyleType: 'none'
  }
}));

export default useStyles;
