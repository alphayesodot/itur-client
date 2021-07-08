import { makeStyles, styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    height: '12rem',
    marginTop: '2rem',
    padding: '0px 1rem 1rem 1rem',
  },
  '&::-webkit-scrollbar': {
    width: '0.5rem',
    backgroundColor: '#ffffff12',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.secondary,
    borderRadius: '5px',
    width: '0.5rem',
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    padding: 0,
  },

}));

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-inputMultiline': {
    fontSize: '0.8rem',
  },
});

export default useStyles;
