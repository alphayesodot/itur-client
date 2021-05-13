import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const AlertSnackbar = ({ open, text }) => (
  <Snackbar open={open}>
    <Alert severity='error'>{text}</Alert>
  </Snackbar>
);

export default AlertSnackbar;
