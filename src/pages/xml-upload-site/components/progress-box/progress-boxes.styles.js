import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '5%',
    width: '50%',
    maxHeight: '22rem',
    overflowY: 'auto',
  },
  progressBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem auto',
    width: '100%',
  },
  upload: {
    margin: '0',
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
    flexDirection: 'row',
  },
  cancelButton: {
    backgroundColor: 'rgb(234,243,246)',
    color: theme.palette.section.primary,
    padding: '0.03rem',
  },
  typography: {
    fontSize: '0.7rem',
    color: 'gray',
    marginBottom: '0.4rem',
  },
  progressBar: {
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
