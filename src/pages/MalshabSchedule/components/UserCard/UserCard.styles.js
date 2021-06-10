import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15rem',
    height: '21rem',
    backgroundColor: theme.palette.card.body,
    margin: '0.5% 0.25% 1% 1%',
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
  icon: {
    height: '1rem',
    width: '1rem',
  },
}));

export default useStyles;
