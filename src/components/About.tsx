import { h } from "preact";
import image from "../assets/aleksandar.jpg";
import { T } from "../core/i18n";
import Section from "./ui/Section";
import { useContext } from "preact/hooks";
import { ThemeContext } from "../core/theme";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <Section bg={theme === "light" ? "bg-blue-700" : ""} id="about">
      <div className="lg:flex ">
        <div className="text-xl md:text-2xl p-4 pb-8 sm:p-6 text-center text-white lg:w-2/3 center text-shadow">
          <T.span text="about.text" />
        </div>
        <div className="md:py-6 pb-6 mx-5 lg:w-1/3">
          <img src={image} alt="Aleksandar Stanisic" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </Section>
  );
}
