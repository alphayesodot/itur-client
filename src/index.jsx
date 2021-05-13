import React from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import App from './App';
import RTL from './utils/rtl';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RTL>
        <App />
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
