import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15rem',
    height: '21rem',
    backgroundColor: theme.palette.card.body,
    margin: '0.5% 0.25% 1% 1%',
    [theme.breakpoints.between('sm', 'md')]: {
      marginBottom: '0.5rem',
    },
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.card.header,
    height: '15%',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '& span': {
      fontWeight: '200',
    },
  },
  info: {
    width: '55%',
    fontSize: '0.875rem',
    textAlign: 'left',
  },
  mail: {
    fontSize: '0.7rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  sum: {
    fontSize: '0.875rem',
  },
  icon: {
    height: '1rem',
    width: '1rem',
  },
  cardBody: {
    width: '100%',
    height: '75%',
    position: 'relative',
    padding: '0.6rem 0 0 0.4rem',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    display: 'flex',
  },
  innerRow: {
    display: 'flex',
    alignItems: 'center',
    wordBreak: 'break-word',
  },
  deleteIcon: {
    padding: '0.3rem',
  },
  eventsDiv: {
    width: '100%',
  },
  eventsList: {
    direction: 'ltr',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  eventItem: {
    display: 'list-item',
    borderBottom: '1px solid #ccd8dc',
    marginRight: '0.87rem',
  },
  eventText: {
    fontSize: '0.875rem',
    wordSpacing: '0.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timeText: {
    minWidth: '2.75rem',
  },
  nameText: {
    fontSize: '0.875rem',
    fontWeight: '600',
    width: '6rem',
    paddingLeft: '0.2rem',
  },
  noEvents: {
    display: 'flex',
    width: '9rem',
    height: '3rem',
    backgroundColor: theme.palette.card.warning,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px',
  },
  noEventsText: {
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    textAlign: 'center',
  },
}));

export default useStyles;
