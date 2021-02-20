import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '2em',
    border: '0.07em dashed',
    borderColor: theme.palette.section.main, 
    backgroundColor: theme.palette.section.primary,
    color: theme.palette.section.main,
    fontSize: '40%'
  },
  uploadButton: {
    backgroundColor: theme.palette.section.main,
    color: 'white',
    padding: ' 0.5em 2em',
    fontSize: '80%'
  },
  remark: {
    color: 'grey',
    fontSize: '40%'
  }
}));

export default useStyles;
