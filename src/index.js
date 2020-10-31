import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './context/theme-context';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = 'dev-chochstrasser.us.auth0.com';
const CLIENT_ID = '2GYooVME1cqD7H3PjRn1kLrldoNE5h1R';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
