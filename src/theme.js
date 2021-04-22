import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Assistant',
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
    scrollbar: {
      main: '#c5cbd0',
      secondary: '#EDF4F5',
    },
    font: {
      secondary: '#8698ad',
    },
  },
});

export default theme;
