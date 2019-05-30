import { h, Fragment } from 'preact';
import Switch from 'react-switch';
import { UiState, ThemeState, LangState } from '../core/state';
import useMedia from '../core/hooks/useMedia';
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
  { name: 'old website', url: 'oldWebsite' },
  { name: 'contact', url: 'contact' },
  { name: 'social', url: 'social' }
];

function SidebarLink(link: NavLink) {
  return (
    <li className="my-2 text-shadow">
      <button
        className="nav-link"
        // href={'#' + link.url}
        onClick={() => {
          window.history.pushState({}, link.name, link.url);
          // console.log('he');
          let section = document.getElementById(link.url);
          section ? section.scrollIntoView({ behavior: 'smooth' }) : '';
          // window.scrollTo('#' + link.url);
        }}
      >
        {(T.translate(`sidebar.${link.url}`) as string).toLowerCase()}
        {/* <T.span text={`sidebar.${link.name}`} /> */}
      </button>
    </li>
  );
}

export default function AppSidebar() {
  const { showSidebar, setShowSidebar } = UiState.useContainer();
  const isWide = useMedia({ minWidth: 768 });
  const { theme, toggleTheme } = ThemeState.useContainer();
  const { toggleLanguage } = LangState.useContainer();
  // const isWide = useMedia('(minWidth: 768px)');

  return (
    <Fragment>
      <div
        className={
          `min-h-full text-xl py-4 px-8  text-white z-10 app-sidebar
          fixed inset-y-0 left-0
          items-center flex

          md:fixed w-56
          ` +
          (isWide || showSidebar ? '' : 'hide ') +
          (theme === 'dark' ? 'bg-black' : 'bg-gray-800')
        }
      >
        <img
          src={logo}
          alt=""
          className="fixed top-0 w-32 mt-4 left-0 ml-8 mx-auto hidden md:block"
        />
        <ul>
          {links.map((link, i) => (
            <SidebarLink {...link} />
          ))}
          <li className="my-2 text-shadow">
            <button className="nav-link" onClick={toggleLanguage}>
              {T.translate('sidebar.lang').toLowerCase()}
            </button>
          </li>
          <li className="my-3 text-shadow">
            {/*
             // @ts-ignore */}
            <Switch
              onChange={toggleTheme}
              checked={theme === 'light'}
              width={60}
              onColor={'#f6e05e'}
              offColor={'#2a4365'}
              checkedIcon={
                <div className="center w-full h-full">
                  <img src={sun} />
                </div>
              }
              uncheckedIcon={
                <div className="center w-full h-full">
                  <img src={moon} />
                </div>
              }
            />
          </li>
        </ul>
      </div>
      {showSidebar && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => {
            setShowSidebar(false);
          }}
        />
      )}
    </Fragment>
  );
}