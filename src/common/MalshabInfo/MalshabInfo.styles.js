import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
  },
  fieldsSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
  },
  fields: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
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
  attachments: {
    width: '25%',
    margin: '0 2%',
  },
  attachmentsTitle: {
    userSelect: 'none',
    fontWeight: '900',
  },
  attachmentsCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    background: theme.palette.primary.main,
    width: '100%',
    height: '95%',
  },
  attachment: {
    display: 'flex',
    padding: '3%',
  },
  attachmentIcon: {
    width: '1rem',
    height: '1rem',
    paddingRight: '5%',
  },
  link: {
    color: 'white',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  message: {
    paddingTop: '20%',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
}));

export default useStyles;
