import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '70%',
    padding: '7rem 6rem',
    margin: 'auto',
    borderRadius: '1em',
  },
}));

export default useStyles;
