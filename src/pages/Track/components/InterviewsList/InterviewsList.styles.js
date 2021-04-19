import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '83%',
    width: '100%',
    overflow: 'scroll',
  },
  list: {
  },
  time: {
    width: '30%',
    textAlign: 'right',
    fontWeight: '600',
    marginLeft: '1em',
  },
  name: {
    width: '70%',
    textAlign: 'right',
    marginLeft: '0.5em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  avatar: {
    width: '1em',
    height: '1em',
  },
}));

export default useStyles;
