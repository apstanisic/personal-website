// import createStore from 'unistore';
// import { createContext } from 'preact';
// import { Provider, connect } from "unistore/preact";
import { createContainer } from 'unstated-next';
import { useState } from 'preact/hooks';

type Theme = 'dark' | 'light';
type Language = 'sr' | 'en';
interface State {
  showSidebar: boolean;
  theme: Theme;
  language: Language;
  [key: string]: any;
}

function useAppState() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');

  return {
    showSidebar,
    setShowSidebar,
    theme,
    setTheme,
    language,
    setLanguage
  };
}

export const AppState = createContainer(useAppState);

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
