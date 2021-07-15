import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    overflow: 'auto',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    [theme.breakpoints.down('xs')]: {
      alignItems: 'stretch',
    },
  },

  document: {
    '& > canvas': { borderRadius: '15px' },
  },

  documentContainer: {
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },

  pageInfo: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  playerWrapper: {
    position: 'relative',
    padding: '2%',
    background: theme.palette.secondary.light,
    borderRadius: '15px',
    marginTop: '1%',
    alignSelf: 'center',

    [theme.breakpoints.down('xs')]: {
      alignSelf: 'inherit',
    },
  },

  player: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  pageControls: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  fixPosition: {
    opacity: 0,
  },

  dialog: {
    width: '100%',
  },
}));

export default useStyles;
