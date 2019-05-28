import { h } from 'preact';
import { Route, Router } from 'preact-router';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Hero from './Hero';
import AppSidebar from './AppSidebar';
import { AppState } from '../state';

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}
export default function App() {
  return (
    <AppState.Provider>
      <div id="app" className="flex flex-row">
        <AppSidebar />
        <div className="container relative flex flex-col">
          <AppHeader />
          <Hero />
          <AppFooter />
        </div>
      </div>
    </AppState.Provider>
  );
}

// export default
