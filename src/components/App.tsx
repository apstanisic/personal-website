import { h } from "preact";
import { useContext } from "preact/hooks";
import { ThemeContext } from "../core/theme";
import About from "./About";
import AppSidebar from "./AppSidebar";
import Contact from "./Contact";
import Hero from "./Hero";
import OldWebsite from "./OldWebsite";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

if ((module as any).hot) {
  // eslint-disable-next-line
  require("preact/debug");
}

export default function App() {
  const { theme } = useContext(ThemeContext);
  const appClasses = theme === "light" ? "text-gray-900 bg-white" : "text-gray-100 bg-gray-900";

  return (
    <div id="app" className={appClasses}>
      <AppSidebar />
      <div className="app-container relative w-full md:ml-56">
        <Hero />
        <About />
        {/* Hide projects for now */}
        {false && <Projects />}
        <Skills />
        <OldWebsite />
        <Contact />
        <Social />
      </div>
    </div>
  );
}
