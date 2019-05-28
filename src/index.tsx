import { h } from 'preact';
import App from './components/App';
// import { store } from './state';
import './style/index.css';
import './style/tailwind.css';
import useMedia from './hooks/useMedia';

export default () => {
  // const isWide = useMedia({ minWidth: 1000 });
  // console.log(isWide);

  return (
    // <Provider store={store}>
    <App />
    // </Provider>
  );
};
