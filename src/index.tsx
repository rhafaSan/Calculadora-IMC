import { createTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const theme = createTheme()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </MuiThemeProvider>
  </React.StrictMode>
);
