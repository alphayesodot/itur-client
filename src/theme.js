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
      main: 'rgb(251,179,53)',
    },
    section: {
      main: 'rgb(247,251,252)',
      primary: 'rgb(16,171,196)',
      secondary: 'rgb(251,179,53)',
      secondaryLight: 'rgb(252,205,123)',
    },
    scrollbar: {
      main: '#c5cbd0',
      secondary: '#EDF4F5',
    },
    font: {
      secondary: '#8698ad',
    },
    card: {
      header: '#d0e1e3',
      body: '#ecf4f6',
      warning: '#ecd8d8',
    },
    textField: {
      focused: '#27b9d1',
    },

  },
});

export default theme;
