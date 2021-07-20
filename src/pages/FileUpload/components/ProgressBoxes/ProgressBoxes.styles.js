import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '33rem',
    maxHeight: '22rem',
    overflowY: 'auto',
    margin: 'auto',
    marginLeft: '3rem',
    padding: 'auto 0',
    minWidth: '10rem',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  progressBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem auto',
    width: '90%',
    padding: '0',
  },
  upload: {
    margin: '0',
    padding: ' 0.5%  0 0.5% 3%',
    background: 'white',
    fontSize: '0.8rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    borderRadius: '0.5em',
    width: '80%',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'rgb(234,243,246)',
    color: theme.palette.section.primary,
    padding: '0',
    '&:hover': {
      '& $doneIcon': {
        display: 'none !important',
      },
      '& $closeIcon': {
        display: 'inline-block',
      },
    },
    height: '1.2rem',
    width: '1.2rem',
  },
  doneIcon: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    margin: '0',
  },
  closeIcon: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    margin: '0.15rem',
    display: 'none',
  },
  size: {
    display: 'flex',
    flexDirection: 'row-reverse',
    textIndent: '0.3em',
  },
  typography: {
    fontSize: '0.7rem',
    color: 'gray',
    marginBottom: '0.4rem',
    textAlign: 'right',
  },
  progressBar: {
    backgroundColor: 'rgb(234,243,246)',
    borderRadius: 35,
  },
  progressBarColor: {
    backgroundColor: theme.palette.section.primary,
  },
  fileImg: {
    marginLeft: '0.5rem',
  },
  noneLi: {
    listStyleType: 'none',
  },
  loader: {
    color: theme.palette.section.primary,
    size: 100,
  },
}));

export default useStyles;
