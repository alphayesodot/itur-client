import { makeStyles } from '@material-ui/core/styles';

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
    fontFamily: theme.typography.fontFamily,
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
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  explanation: {
    color: 'black',
    fontSize: '0.9rem',
    fontFamily: theme.typography.fontFamily,
  },
  cloudImg: {
    width: '10rem',
    height: '8rem',
    marginBottom: '5%',
  },
}));

export default useStyles;
