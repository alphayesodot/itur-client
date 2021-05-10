import { makeStyles } from '@material-ui/core/styles';

const getTimePassed = (theme) => ({
  color: theme.palette.font.secondary,
  fontWeight: '400',
});

const getNamePassed = (theme) => ({
  color: theme.palette.font.secondary,
  textDecoration: 'line-through',
});

const useStyles = makeStyles((theme) => ({
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
  item: {
    background: theme.palette.scrollbar.secondary,
  },
  timeDONE: getTimePassed(theme),
  nameDONE: getNamePassed(theme),
  timeCANCELED: getTimePassed(theme),
  nameCANCELED: getNamePassed(theme),
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
