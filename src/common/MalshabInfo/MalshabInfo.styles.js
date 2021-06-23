import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  fieldsDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '75%',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 1.5%',
    minWidth: '15%',
  },
  fieldTitle: {
    userSelect: 'none',
    fontSize: '0.8rem',
    paddingLeft: '3%',
    paddingTop: '1%',
  },
  fieldValue: {
    border: '0.1px solid lightgrey',
    borderRadius: 30,
    padding: '0.5rem',
    fontSize: '0.9rem',
  },
  sectionTitle: {
    userSelect: 'none',
    fontWeight: '900',
    paddingLeft: '1%',
    paddingBottom: '2%',
  },
}));

export default useStyles;
