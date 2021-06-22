import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
  fieldsSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
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
  },
  fieldValue: {
    border: '0.1px solid lightgrey',
    borderRadius: '5px',
    padding: '0.25rem',
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
