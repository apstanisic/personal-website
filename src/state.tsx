// import createStore from 'unistore';
import { createContext } from 'preact';
// import { Provider, connect } from "unistore/preact";

type Theme = 'dark' | 'light';
type Language = 'sr' | 'en';
interface State {
  showSidebar: boolean;
  theme: Theme;
  language: Language;
  [key: string]: any;
}

const defaultState: State = {
  showSidebar: false,
  theme: 'light',
  language: 'sr',
  toggleSidebar() {
    defaultState.showSidebar = !defaultState.showSidebar;
  }
};

export const AppContext = createContext(defaultState);
// const store = createStore<State>(defaultState);

// type AppStore = typeof store;

// const actions = (store: AppStore) => ({
//   toggleSidebar(state: State): State {
//     return { ...state, showSidebar: !state.showSidebar };
//   },
//   changeTheme(state: State): State {
//     return { ...state, showSidebar: !state.showSidebar };
//   }
// });

// export { store, actions };
