import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.scrollbar.secondary,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em 1em',
    paddingBottom: '0',
  },
  title: {
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    paddingRight: '0.5em',
  },
  name: {
    fontWeight: '700',
  },
  interviewsCount: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: '0.2em 1.2em',
    marginBottom: '0.5em',
  },
}));

export default useStyles;
