import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  addUsersTitle: {
    fontSize: '1.3rem',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    fontColor: theme.palette.section.main,
    direction: 'rtl',
    width: '11rem',
    marginLeft: '94rem',
    marginTop: '2.5rem',
    marginBottom: '1.5rem',
  },
  addUnitButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    width: '17rem',
    height: '3rem',
    fontSize: '1rem',
    marginLeft: '88.5rem',
    marginTop: '1.2rem',
    direction: 'rtl',
  },

}));

export default useStyles;
