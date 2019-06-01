import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Providers, ThemeState } from '../core/state';
import About from './About';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Social from './Social';
import OldWebsite from './OldWebsite';

if ((module as any).hot) {
  // eslint-disable-next-line
  require('preact/debug');
}
export default function App() {
  const { theme } = ThemeState.useContainer();
  const appClasses =
    theme === 'light' ? 'text-gray-900 bg-white' : 'text-gray-100 bg-gray-900';

  return (
    <div id="app" className={appClasses}>
      <AppSidebar />
      <div className="app-container relative w-full md:ml-56">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <OldWebsite />
        <Contact />
        <Social />
      </div>
    </div>
  );
}
