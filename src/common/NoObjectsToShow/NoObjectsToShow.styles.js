import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: 'lightGray',
    width: '100%',
    height: '100%',
    padding: '25% 0',
  },
}));

export default useStyles;
