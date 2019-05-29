import { h } from 'preact';
import Fb from '../assets/social/facebook.svg';
import Ig from '../assets/social/instagram.svg';
import In from '../assets/social/linkedin.svg';
import Gh from '../assets/social/github.svg';

export default function Social() {
  return (
    <div className="center py-8 ">
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
    </div>
  );
}
