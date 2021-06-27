import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    maxWidth: '200rem',
    paddingBottom: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    paddingBottom: '1rem',
    // backgroundColor: 'red',
    fontFamily: theme.typography.fontFamily,
  },
  delatils: {
    width: '100%',
    margin: 'auto 0',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  labeledInput: {
  },
  inputContainer: {
    // backgroundColor: 'green',
    width: '40%',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  marginBottom: {
    marginBottom: '1rem',
  },

  nodesContainer: {
    width: '58%',
  },
  nodesDashBoard: {
    backgroundColor: theme.palette.dialog.secondaryLight,
    padding: '1rem',
  },
  questions: {
    marginBottom: '1.5rem',
  },
  questionsTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
  },
  questionsDashBoard: {
    backgroundColor: theme.palette.dialog.secondaryLight,
    padding: '1rem',
  },
  noNodeGroups: {
    alignSelf: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.dialog.secondary,
    width: '100%',
    textAlign: 'center',
  },
  label: {
    color: theme.palette.dialog.secondary,
  },
  select: {
    width: '100%',
    border: 'solid 1.7px',
    borderColor: theme.palette.dialog.secondaryLight,
    borderRadius: '15px',
  },
  addButton: {
    fontWeight: 'bold',
    color: theme.palette.dialog.primary,
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '25px',
  },
  iconImg: {
    margin: '0.3rem',
  },
}));

export default useStyles;
