import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import theme from '../../../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '30%',
    textAlign: 'center',
    padding: '5%',
    border: '0.07rem dashed',
    borderColor: theme.palette.section.main,
    backgroundColor: theme.palette.section.primary,
    color: theme.palette.section.main,
    fontSize: '0.8rem'
  },
  uploadButton: {
    backgroundColor: theme.palette.section.main,
    color: 'white',
    padding: ' 0.5em 2em',
    fontSize: '1rem'
  },
  remark: {
    color: 'grey',
    fontSize: '0.8rem'
  },
  cloudImg: {
    width: '10rem',
    height: '8rem',
  },
}));

export default useStyles;
