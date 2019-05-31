import { h } from 'preact';
import { ThemeState } from '../core/state';
import Section from './ui/Section';
import Fb from '../assets/social/facebook.svg';
import Ig from '../assets/social/instagram.svg';
import In from '../assets/social/linkedin.svg';
import Gh from '../assets/social/github.svg';

export default function Social() {
  const { theme } = ThemeState.useContainer();
  return (
    // <div className={'w-full ' + (theme === 'dark' ? 'bg-blue-100' : '')}></div>
    <Section
      bg={theme === 'light' ? 'bg-gray-200' : ''}
      className="center -mt-8"
      id="social"
    >
      <a
        className="mx-6"
        href="https://github.com/aleksandarstanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Gh} className="w-16" alt="Github" />
      </a>

      <a
        className="mx-6"
        href="https://linkedin.com/in/astanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={In} className="w-16" alt="Linkedin" />
      </a>

      <a
        className="mx-6"
        href="https://instagram.com/astanisic_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Ig} className="w-16" alt="Instagram" />
      </a>

      <a
        className="mx-6"
        href="https://www.facebook.com/apstanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Fb} className="w-16" alt="Facebook" />
      </a>
    </Section>
  );
}
