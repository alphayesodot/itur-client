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
    fontWeight: '600',
  },
  name: {
    width: '70%',
    marginLeft: '0.5em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
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
