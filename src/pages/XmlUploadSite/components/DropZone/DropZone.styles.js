import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import theme from '../../../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20rem',
    textAlign: 'center',
    padding: '10%',
    border: '0.12rem dashed',
    borderColor: theme.palette.section.primary,
    backgroundColor: theme.palette.section.main,
    color: theme.palette.section.primary,
    fontSize: '0.8rem',
    margin: 'auto',
  },
  uploadButton: {
    backgroundColor: theme.palette.section.secondary,
    color: 'black',
    padding: '1.5% 4%',
    fontSize: '0.7rem',
    borderRadius: '25rem',
    marginTop: '3%',
  },
  limitation: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginTop: '2%',
  },
  explanation: {
    color: 'black',
    fontSize: '0.9rem',
  },
  cloudImg: {
    width: '10rem',
    height: '8rem',
    marginBottom: '5%',
  },
}));

export default useStyles;
