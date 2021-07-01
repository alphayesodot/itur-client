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
    table: {
      main: 'rgb(207,225,227)',
      secondary: 'rgb(244,245,247)',
    },
    dialog: {
      primary: 'rgb(0,175,204)',
      secondary: 'rgb(138,138,138)',
      secondaryMid: 'rgb(236,237,238)',
      secondaryLight: 'rgb(244,245,247)',
    },
  },
});

export default theme;
