import { h, Fragment } from 'preact';
import { AppState } from '../state';
import useMedia from '../hooks/useMedia';

interface NavLink {
  url: string;
  name: string;
}

const links: NavLink[] = [
  { name: 'Home', url: 'home' },
  { name: 'Work', url: 'work' },
  { name: 'About', url: 'home' },
  { name: 'Contact', url: 'home' },
  { name: 'Social', url: 'home' }
];

export default function AppSidebar() {
  const { showSidebar, setShowSidebar } = AppState.useContainer();
  const isWide = useMedia({ minWidth: 768 });

  return (
    <Fragment>
      <div
        className={
          `h-full text-xl py-4 px-8  bg-black text-white z-10 app-sidebar
          fixed inset-y-0 left-0
          md:relative  w-32
          ` + (isWide || showSidebar ? '' : 'hide')
        }
      >
        <ul>
          {links.map((link, i) => (
            <li key={i} className="my-2">
              {link.name}
            </li>
          ))}
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
