import { h } from "preact";
import { ThemeState } from "../core/state";
import Section from "./ui/Section";
import Fb from "../assets/social/facebook.svg";
import Ig from "../assets/social/instagram.svg";
import In from "../assets/social/linkedin.svg";
import Gh from "../assets/social/github.svg";

export default function Social() {
  const { theme } = ThemeState.useContainer();
  // Every img tag with logo have this classes
  const logoClasses = `w-16 ${theme === "dark" ? "social-dark-theme" : ""}`;
  return (
    // <div className={'w-full ' + (theme === 'dark' ? 'bg-blue-100' : '')}></div>
    <Section bg={theme === "light" ? "bg-gray-200" : ""} className="center -mt-8" id="social">
      <a
        className="mx-6 hover-scale-10"
        href="https://github.com/aleksandarstanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Gh} className={logoClasses} alt="Github logo" />
      </a>

      <a
        className="mx-6 hover-scale-10"
        href="https://linkedin.com/in/astanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={In} className={logoClasses} alt="LinkedIn logo" />
      </a>

      <a
        className="mx-6 hover-scale-10"
        href="https://instagram.com/astanisic_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Ig} className={logoClasses} alt="Instagram logo" />
      </a>

      <a
        className="mx-6 hover-scale-10"
        href="https://www.facebook.com/apstanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Fb} className={logoClasses} alt="Facebook logo" />
      </a>
    </Section>
  );
}
