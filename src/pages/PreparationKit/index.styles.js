import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'auto',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  },

  document: {
    '& > canvas': { borderRadius: '15px' },
  },

  documentContainer: {
    marginLeft: '10%',
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

    [theme.breakpoints.down('md')]: {
      alignSelf: 'flex-start',
    },
  },

  player: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
