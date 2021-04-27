import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  // root: {
  //   width: '100%',
  //   textAlign: 'center',
  //   alignItems: 'center',
  // },
  content: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: '7rem 3rem',
  },
}));

export default useStyles;
