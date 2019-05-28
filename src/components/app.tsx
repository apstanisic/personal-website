import { h } from 'preact';
import { Route, Router } from 'preact-router';
import { connect } from 'unistore/preact';
import AppHeader from './AppHeader';
import AppFooter from './AppHeader';
import Hero from './Hero';
import AppSidebar from './AppSidebar';

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}
export default function App() {
  return (
    <div id="app" className="text-3xl mx-auto">
      <AppHeader />
      <AppSidebar />
      <Hero />
      <AppFooter />
    </div>
  );
}

// export default
