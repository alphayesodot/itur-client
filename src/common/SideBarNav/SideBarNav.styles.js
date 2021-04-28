import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '5rem',
    marginLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.2%',
    paddingBottom: '1.5%',
  },
  icons: {
    marginTop: '2rem',
    '&:hover,&:focus': {
      transform: 'rotate(-10deg)',
      transitionDuration: '0.2s',
    },
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default useStyles;
