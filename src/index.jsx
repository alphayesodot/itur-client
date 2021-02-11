import React from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
