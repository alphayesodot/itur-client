import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80%',
    width: '14em',
    overflowY: 'scroll',
    overflowX: 'hidden',
    margin: '0.5em',
  },
  list: {
    padding: 0,
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
  itemFUTURE: {
    background: theme.palette.scrollbar.secondary,
  },
  itemDONE: {
    background: theme.palette.scrollbar.secondary,
  },
  timeDONE: {
    color: theme.palette.font.secondary,
    fontWeight: '400',
  },
  nameDONE: {
    color: theme.palette.font.secondary,
    textDecoration: 'line-through',
  },
  itemCANCELED: {
    background: theme.palette.scrollbar.secondary,
  },
  timeCANCELED: {
    color: theme.palette.font.secondary,
    fontWeight: '400',
  },
  nameCANCELED: {
    color: theme.palette.font.secondary,
    textDecoration: 'line-through',
  },
  itemDURING: {
    background: theme.palette.primary.main,
  },
  timeDURING: {
    color: 'white',
  },
  nameDURING: {
    color: 'white',
    fontWeight: '600',
  },
  itemBREAK: {
    background: '#D9EDF0',
  },
}));

export default useStyles;
