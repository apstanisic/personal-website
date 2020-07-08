import { Fragment, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import Switch from "react-switch";
// import { useMedia } from "../core/hooks/useMedia";
<<<<<<< HEAD
import { useMedia } from "react-use";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { LangContext, T } from "../core/i18n";
=======
import useMedia from "react-use/lib/useMedia";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { LangContext, useT } from "../core/i18n";
>>>>>>> master
import { ThemeContext } from "../core/theme";
import { UiContext } from "../core/ui";

interface NavLink {
  url: string;
  name: string;
}

const links: NavLink[] = [
  { name: "home", url: "home" },
  { name: "about", url: "about" },
  // { name: "projects", url: "projects" },
  { name: "skills", url: "skills" },
  { name: "oldWebsite", url: "old-website" },
  { name: "contact", url: "contact" },
  // { name: 'social', url: 'social' }
];

interface SidebarLinkProps extends NavLink {
  onClick?: () => any;
  key?: any;
}

function SidebarLink(props: SidebarLinkProps) {
  const t = useT();
  return (
    <li className="my-2 text-shadow">
      <button
        className="nav-link"
        // href={'#' + link.url}
        onClick={() => {
          props.onClick?.();
          window.history.pushState({}, props.name, props.url);
          const section = document.getElementById(props.url);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {t(`sidebar.${props.name}`).toLowerCase()}
      </button>
    </li>
  );
}

<<<<<<< HEAD
export default function AppSidebar() {
=======
export function AppSidebar() {
  const t = useT();
>>>>>>> master
  const { showSidebar, toggleSidebar } = useContext(UiContext);
  const isWide = useMedia("(min-width: 768px)");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { toggleLanguage } = useContext(LangContext);
  const [transition, setTransition] = useState("none");
  const [transform, setTransform] = useState("");

  /* Show always when wide, when small depend on state */
  useEffect(() => {
    if (isWide) return setTransform("none");

    if (showSidebar) {
      setTransform("none");
    } else {
      setTransform("translateX(-100%)");
    }
  }, [isWide, showSidebar]);

  /* Disable animation when rendering first time
    Because when it's full screen it shows how slides from side
  */
  useEffect(() => {
    setTimeout(() => {
      setTransition("transform 200ms ease-in-out");
    }, 500);
  }, []);

  return (
    <Fragment>
      <div
        style={{ ...{ transition }, ...{ transform } }}
        className={`min-h-full text-xl py-4 px-8  text-white z-10 app-sidebar
          fixed inset-y-0 left-0
          items-center flex

          md:fixed w-56
          ${theme === "dark" ? "bg-black" : "bg-gray-800"}`}
      >
        <img
          src={logo}
          alt="Logo"
          className="fixed top-0 w-32 mt-4 left-0 ml-8 mx-auto hidden md:block"
        />
        <ul>
          <li className="my-5 text-shadow">
            <Switch
              aria-label="change theme"
              onChange={toggleTheme}
              checked={theme === "light"}
              width={60}
              onColor={"#f6e05e"}
              offColor={"#2a4365"}
              checkedIcon={
                <div className="center w-full h-full">
                  <img src={sun} alt="sun icon" />
                </div>
              }
              uncheckedIcon={
                <div className="center w-full h-full">
                  <img src={moon} alt="moon icon" />
                </div>
              }
            />
          </li>
          {links.map((link, i) => (
            <SidebarLink {...link} key={i} onClick={toggleSidebar} />
          ))}
          <li className="my-2 text-shadow">
            <button className="nav-link" onClick={toggleLanguage}>
              {t("sidebar.lang").toLowerCase()}
            </button>
          </li>
        </ul>
      </div>
      {showSidebar && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 6, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={toggleSidebar}
        />
      )}
    </Fragment>
  );
}
