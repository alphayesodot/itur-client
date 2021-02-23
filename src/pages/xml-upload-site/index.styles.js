import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '70%',
    padding: '2% 3%',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: '1em',
    boxShadow: '0.1em 0.1em 0.1em rgba(0,0,0,0.16), 0.1em 0.3em 0.6em rgba(0,0,0,0.23)',
  },
}));

export default useStyles;
