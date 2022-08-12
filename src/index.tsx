import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import GlobalCss from './components/App/Global/Global.style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <CssBaseline />
    <App />
  </React.StrictMode>
);
