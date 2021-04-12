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
      main: 'rgb(228,115,91)',
    },
    section: {
      main: 'rgb(71,159,251)',
      primary: 'rgb(238,246,255)',
    },
  },
});

export default theme;
