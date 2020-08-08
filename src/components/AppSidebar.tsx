import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Switch from "react-switch";
// import { useMedia } from "../core/hooks/useMedia";
import useMedia from "react-use/lib/useMedia";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { useLang, useT } from "../core/lang";
import { useSidebar } from "../core/sidebar";
import { useTheme } from "../core/theme";

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

export function AppSidebar() {
  const t = useT();
  const sidebar = useSidebar();
  const isWide = useMedia("(min-width: 768px)");
  const theme = useTheme();

  const [transition, setTransition] = useState("none");
  const [transform, setTransform] = useState("");
  const lang = useLang();

  /* Show always when wide, when small depend on state */
  useEffect(() => {
    if (isWide) return setTransform("none");

    if (sidebar.value) {
      setTransform("none");
    } else {
      setTransform("translateX(-100%)");
    }
  }, [isWide, sidebar]);

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
          ${theme.value === "dark" ? "bg-black" : "bg-gray-800"}`}
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
              onChange={theme.toggle}
              checked={theme.value === "light"}
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
            <SidebarLink {...link} key={i} onClick={sidebar.toggle} />
          ))}
          <li className="my-2 text-shadow">
            <button className="nav-link" onClick={lang.toggle}>
              {t("sidebar.lang").toLowerCase()}
            </button>
          </li>
        </ul>
      </div>
      {sidebar.value && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 6, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={sidebar.toggle}
        />
      )}
    </Fragment>
  );
}
