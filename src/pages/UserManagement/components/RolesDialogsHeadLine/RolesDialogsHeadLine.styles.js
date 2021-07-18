import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '5%',
  },
  headLine: {
    backgroundColor: '#f3f5f7',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    borderRadius: 30,
    width: '75%',
  },
  titles: {
    marginRight: '0.5rem',
  },
  unitTitle: {
    wordSpacing: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  section: {
    marginRight: '0.5rem',
  },
}));

export default useStyles;
