import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: '3vw',
    backgroundColor: '#E8EBEF',
  },
  uploadArea: {
    backgroundColor: 'white',
    width: '30vw',
    padding: '2vw 0',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: '1em',
    boxShadow: '0.1em 0.1em 0.1em rgba(0,0,0,0.16), 0.1em 0.3em 0.6em rgba(0,0,0,0.23)',
  },
  dropZone: {
    width: '100%',
    borderColor: 'skylight',
  }
}));

export default useStyles;
