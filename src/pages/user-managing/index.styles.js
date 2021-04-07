import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: 'red',
    display: 'flex',
    height: '57rem',
    justifyContent: 'center',
  },
  unitDetails: {
    backgroundColor: 'blue',
    weight: '100rem',
    height: '10rem',
    order: '1',
    borderRadius: '0.5rem',
  },
  units: {
    backgroundColor: 'green',
    weight: '100rem',
    height: '35rem',
    order: '2',
    borderRadius: '0.5rem',
  },
}));

export default useStyles;
