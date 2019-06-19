import { h } from 'preact';
import 'normalize.css';
import App from './components/App';
// import 'normalize.css';
import './style/index.css';
import { Providers } from './core/state';

export default function Main() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
