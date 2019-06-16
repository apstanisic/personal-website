import { h, Fragment } from 'preact';
import Switch from 'react-switch';
import { useEffect, useState } from 'preact/hooks';
import { UiState, ThemeState, LangState } from '../core/state';
import { useMedia } from '../core/hooks/useMedia';
import { T } from '../core/i18n';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';
import logo from '../assets/logo.svg';
// import { useMedia } from 'react-use';

interface NavLink {
  url: string;
  name: string;
}

const links: NavLink[] = [
  { name: 'home', url: 'home' },
  { name: 'about', url: 'about' },
  { name: 'projects', url: 'projects' },
  { name: 'skills', url: 'skills' },
  { name: 'oldWebsite', url: 'old-website' },
  { name: 'contact', url: 'contact' },
  // { name: 'social', url: 'social' }
];

interface SidebarLinkProps extends NavLink {
  onClick?: () => any;
  key?: any;
}

function SidebarLink(props: SidebarLinkProps) {
  return (
    <li className="my-2 text-shadow">
      <button
        className="nav-link"
        // href={'#' + link.url}
        onClick={() => {
          if (props.onClick) props.onClick();
          window.history.pushState({}, props.name, props.url);
          const section = document.getElementById(props.url);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {(T.translate(`sidebar.${props.name}`) as string).toLowerCase()}
        {/* <T.span text={`sidebar.${link.name}`} /> */}
      </button>
    </li>
  );
}

export default function AppSidebar() {
  const { showSidebar, toggleSidebar } = UiState.useContainer();
  const isWide = useMedia({ minWidth: 768 });
  const { theme, toggleTheme } = ThemeState.useContainer();
  const { toggleLanguage } = LangState.useContainer();
  const [transition, setTransition] = useState('none');
  const [transform, setTransform] = useState('');

  /* Show always when wide, when small depend on state */
  useEffect(() => {
    if (isWide) return setTransform('none');

    if (showSidebar) {
      setTransform('none');
    } else {
      setTransform('translateX(-100%)');
    }
  }, [isWide, showSidebar]);

  /* Disable animation when rendering first time
    Because when it's full screen it shows how slides from side
  */
  useEffect(() => {
    setTimeout(() => {
      setTransition('transform 200ms ease-in-out');
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
          ${theme === 'dark' ? 'bg-black' : 'bg-gray-800'}`}
      >
        <img
          src={logo}
          alt="Logo"
          className="fixed top-0 w-32 mt-4 left-0 ml-8 mx-auto hidden md:block"
        />
        <ul>
          <li className="my-5 text-shadow">
            {/*
             // @ts-ignore */}
            <Switch
              aria-label="change theme"
              onChange={toggleTheme}
              checked={theme === 'light'}
              width={60}
              onColor={'#f6e05e'}
              offColor={'#2a4365'}
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
              {T.translate('sidebar.lang').toLowerCase()}
            </button>
          </li>
        </ul>
      </div>
      {showSidebar && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={toggleSidebar}
        />
      )}
    </Fragment>
  );
}
