import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    width: '80rem',
    marginTop: '2rem',
    boxShadow: 'none',
  },
  addUsersButton: {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '1.5rem',
    direction: 'rtl',
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
    },
  },
  addButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '20rem',
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '2rem',
    width: '2rem',
  },
  numberOfRoleUsers: {
    width: '3rem',
    marginLeft: '2rem',
    border: '0.2px solid lightgrey',
    borderRadius: '0.5rem',
  },
  addDiv: {
    display: 'flex',
    width: '70%',
    justifyContent: 'space-between',
  },
  tableHeadLine: {
    fontWeight: 'bold',
  },
  permissionsButton: {
    border: '1px solid rgb(76,175, 204)',
    color: 'rgb(76,175, 204)',
    borderRadius: '10rem',
    width: '8rem',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'rgb(244,245,247)',
    },
    width: '0.5rem',
  },
  noUsersDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

export default useStyles;
