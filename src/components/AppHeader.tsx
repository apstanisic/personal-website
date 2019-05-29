import { h } from 'preact';
import { UiState } from '../core/state';
import Menu from '../assets/menu.svg';

export default function AppFooter() {
  const { setShowSidebar } = UiState.useContainer();
  return (
    <div
      className="w-full h-16 flex justify-between absolute top-0"
      style={{ zIndex: 5 }}
    >
      <button
        className="pl-4 md:invisible"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <img src={Menu} className="h-12 w-12 text-white" alt="" srcset="" />
      </button>
      <div className="center text-gray-100 w-24 text-4xl">
        <span className="px-2">ast</span>
      </div>
    </div>
  );
}
