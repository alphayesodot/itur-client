import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  unitDetails: {
    height: '100%',
    width: '70vw', // 85rem ?
  },
  noUnitSelectedDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rubik, sans-serif',
    height: '100%',
    color: 'rgb(141 148 155 / 0.31)',
  },
  noUnitSelected: {
    fontWeight: 700,

  },
}));

export default useStyles;
