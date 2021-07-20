import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.scrollbar.secondary,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em 0.2em',
    paddingBottom: '0',
  },
  iconDiv: {
    width: '15%',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  info: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
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
  mail: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '0.8rem',
    width: '100%',
  },
}));

export default useStyles;
