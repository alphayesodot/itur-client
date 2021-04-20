import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '83%',
    width: '100%',
    overflow: 'scroll',
  },
  time: {
    width: '20%',
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
  timeDONE: {
    color: theme.palette.font.secondary,
    fontWeight: '400',
  },
  nameDONE: {
    color: theme.palette.font.secondary,
    textDecoration: 'line-through',
  },
  timeCANCELED: {
    color: theme.palette.font.secondary,
    fontWeight: '400',
  },
  nameCANCELED: {
    color: theme.palette.font.secondary,
    textDecoration: 'line-through',
  },
}));

export default useStyles;
