import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // TODO: Add font
  },
  palette: {
    primary: {
      main: 'rgb(26,102,191)',
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
