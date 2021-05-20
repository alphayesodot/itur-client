import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  unitDetails: {
    height: '100%',
    width: '70vw', // 85rem ?
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      height: '100%',
    },
  },
  noUnitSelectedDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rubik, sans-serif',
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
