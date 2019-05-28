import { h } from 'preact';
import { AppState } from '../state';
import Menu from '../assets/menu.svg';

export default function AppFooter() {
  const { setShowSidebar } = AppState.useContainer();
  return (
    <div className="w-full h-16 bg-red-400 flex justify-between">
      <button
        className="pl-4 md:invisible"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <img src={Menu} className="h-12 w-12" alt="" srcset="" />
      </button>
      <div className="center w-16 text-4xl">as</div>
    </div>
  );
}
