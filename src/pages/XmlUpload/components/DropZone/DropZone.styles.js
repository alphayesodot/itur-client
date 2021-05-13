import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20rem',
    textAlign: 'center',
    padding: '5% 12%',
    border: '0.125rem dashed',
    borderRadius: '10px',
    borderColor: 'rgb(143,210,220)',
    backgroundColor: theme.palette.section.main,
    color: theme.palette.section.primary,
    fontSize: '0.8rem',
    fontFamily: theme.typography.fontFamily,
    margin: 'auto 4rem',
    [theme.breakpoints.down('sm')]: {
      margin: '3rem auto',
    },
  },
  uploadButton: {
    backgroundColor: theme.palette.section.secondary,
    color: 'black',
    padding: '5% 6%',
    borderRadius: '25rem',
    marginTop: '3%',
  },
  uploadIcon: {
    marginLeft: '0.5rem',
  },
  limitation: {
    fontSize: '0.8rem',
    fontFamily: theme.typography.fontFamily,
    marginTop: '2%',
  },
  explanation: {
    color: 'black',
    fontSize: '1.1rem',
    fontFamily: theme.typography.fontFamily,
  },
  cloudImg: {
    width: '20rem',
    height: '15rem',
    marginBottom: '5%',
  },
}));

export default useStyles;
