import { h } from 'preact';
import App from './components/App';
import './style/index.css';
import './style/tailwind.css';
import { Providers } from './core/state';

export default () => (
  <Providers>
    <App />
  </Providers>
);
