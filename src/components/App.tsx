import { h } from 'preact';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Hero from './Hero';
import AppSidebar from './AppSidebar';
import { Providers } from '../state';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}
export default function App() {
  return (
    <Providers>
      <div id="app" className="">
        <AppSidebar />
        <div className="app-container relative w-full md:ml-56">
          <AppHeader />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <AppFooter />
        </div>
      </div>
    </Providers>
  );
}

// export default
