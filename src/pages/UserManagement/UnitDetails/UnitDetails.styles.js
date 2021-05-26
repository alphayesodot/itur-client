import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '70vw',
    overflowY: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      height: '100%',
    },
  },
  noUnitSelectedDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    height: '100%',
    color: 'rgb(141 148 155 / 0.31)',
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      height: '40vw',
    },
  },
  noUnitSelected: {
    fontWeight: 700,
  },
}));

export default useStyles;
