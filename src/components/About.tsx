import { h } from "preact";
import { useContext } from "preact/hooks";
import image from "../assets/aleksandar.jpg";
import { useT } from "../core/i18n";
import { ThemeContext } from "../core/theme";
import { Section } from "./common/Section";

export function About() {
  const { theme } = useContext(ThemeContext);
  const t = useT();
  return (
    <Section bg={theme === "light" ? "bg-blue-700" : ""} id="about">
      <div className="lg:flex ">
        <div className="text-xl md:text-2xl p-4 pb-8 sm:p-6 text-center text-white lg:w-2/3 center text-shadow">
          {t("about.text")}
        </div>
        <div className="md:py-6 pb-6 mx-5 lg:w-1/3">
          <img src={image} alt="Aleksandar Stanisic" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </Section>
  );
}
