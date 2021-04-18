import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.scrollbar.secondary,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingTop: '1em',
    paddingRight: '1.5em',
    alignSelf: 'start',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    paddingLeft: '0.5em',
  },
  name: {
    fontWeight: '700',
  },
  interviewsCount: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: '0.2em',
  },
}));

export default useStyles;
