import { h } from 'preact';
import App from './components/app';
import { Provider, connect } from 'unistore/preact';
// import { store } from './state';
import './style/index.css';
import './style/tailwind.css';

export default () => {
  return (
    // <Provider store={store}>
    <App />
    // </Provider>
  );
};
