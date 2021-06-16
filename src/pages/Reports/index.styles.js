import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: '800',
  },
  fieldsRaw: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  inputSection: {
    padding: '2% 0',
    marginRight: '2%',
  },
  inputLabel: {
    fontWeight: '600',
  },
  input: {
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
    fontWeight: 500,
    background: 'white',
    width: '12rem',
    height: '2.2rem',
  },
  select: {
    height: '2.5rem',
  },
}));

export default useStyles;
