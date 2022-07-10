import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/theme-context';
import { Auth0Provider } from '@auth0/auth0-react';
import config from './config';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Auth0Provider domain={config.DOMAIN} clientId={config.CLIENT_ID} redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
