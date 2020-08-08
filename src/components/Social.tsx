import { h } from "preact";
import Fb from "../assets/social/facebook.svg";
import Gh from "../assets/social/github.svg";
import Ig from "../assets/social/instagram.svg";
import In from "../assets/social/linkedin.svg";
import { Section } from "./common/Section";
import { useTheme } from "../core/theme";

export function Social() {
  const theme = useTheme();
  // Every img tag with logo have this classes
  const logoClasses = `w-16 ${theme.value === "dark" ? "social-dark-theme" : ""}`;

  return (
    <Section bg={theme.value === "light" ? "bg-gray-200" : ""} className="center -mt-8" id="social">
      {/* Github */}
      <a
        className="mx-6 hover-scale-10"
        href="https://github.com/aleksandarstanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Gh} className={logoClasses} alt="Github logo" />
      </a>

      {/* LinkedIn */}
      <a
        className="mx-6 hover-scale-10"
        href="https://linkedin.com/in/astanisic"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={In} className={logoClasses} alt="LinkedIn logo" />
      </a>

      {/* Instagram */}
      <a
        className="mx-6 hover-scale-10"
        href="https://instagram.com/astanisic_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={Ig} className={logoClasses} alt="Instagram logo" />
      </a>

      {/* Facebook */}
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
