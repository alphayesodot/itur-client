import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '70%',
    padding: '7rem 3rem',
    margin: 'auto',
    borderRadius: '1em',
  }
}));

export default useStyles;
