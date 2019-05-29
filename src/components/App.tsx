import { h } from 'preact';
import { Providers } from '../state';
import About from './About';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Social from './Social';

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
          <Skills />
          <Contact />
          <Social />
        </div>
      </div>
    </Providers>
  );
}

// export default
