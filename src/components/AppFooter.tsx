import { h } from 'preact';
import Fb from '../assets/social/facebook.svg';
import Ig from '../assets/social/instagram.svg';
import In from '../assets/social/linkedin.svg';
import Gh from '../assets/social/github.svg';

export default function AppFooter() {
  return (
    <div className="center py-8 ">
      <a className="mx-6">
        <img src={Gh} className="w-16" alt="Github" />
      </a>
      <a className="mx-6">
        <img src={In} className="w-16" alt="Linkedin" />
      </a>
      <a className="mx-6">
        <img src={Ig} className="w-16" alt="Instagram" />
      </a>
      <a className="mx-6">
        <img src={Fb} className="w-16" alt="Facebook" />
      </a>
    </div>
  );
}
