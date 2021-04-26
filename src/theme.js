import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  palette: {
    primary: {
      main: '#0f2231',
      secondary: '#fcb333',
    },
    secondary: {
      main: 'rgb(251,179,53)',
    },
    section: {
      main: 'rgb(247,251,252)',
      primary: 'rgb(16,171,196)',
      secondary: 'rgb(251,179,53)',
    },
    scrollbar: {
      main: '#c5cbd0',
      secondary: '#EDF4F5',
    },
  },
});

export default theme;
