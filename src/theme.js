import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // TODO: Add font
  },
  palette: {
    primary: {
      main: 'rgb(225,245,246)',
      primary: '',
      secondary: 'rgb(16,171,196)',
    },
    secondary: {
      main: 'rgb(251,179,53)',
    },
    section: {
      main: 'rgb(247,251,252)',
      primary: 'rgb(16,171,196)',
      secondary: 'rgb(251,179,53)',
    },
  },
});

export default theme;
