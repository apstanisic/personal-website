import { h } from 'preact';
import { Fragment, createContext } from 'preact';
import { useContext } from 'preact/hooks';
// import { AppContext } from '../state';
import { AppContext } from '../state';

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
  const { showSidebar, toggleSidebar } = useContext(AppContext);
  console.log(showSidebar);

  return (
    <Fragment>
      <div
        className={
          'h-full w-64 fixed inset-y-0 left-0 bg-blue-400 z-10 app-sidebar ' +
          (showSidebar ? 'show' : '')
        }
      >
        <ul>
          {links.map((link, i) => (
            <li key={i}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div className="" style={{ zIndex: 5, backgroundColor: '' }} />
      {!showSidebar && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 15, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => {
            console.log('ehlo');
            toggleSidebar();
          }}
        />
      )}
    </Fragment>
  );
}
