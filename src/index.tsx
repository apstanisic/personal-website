import { h } from 'preact';
import 'normalize.css';
import App from './components/App';
// import 'normalize.css';
import './style/index.css';
import './style/tailwind.css';
import { Providers } from './core/state';

export default () => (
  <Providers>
    <App />
  </Providers>
);
