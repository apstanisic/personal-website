import { h } from 'preact';
import { UiState } from '../core/state';
import Menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';

export default function AppFooter() {
  const { setShowSidebar } = UiState.useContainer();
  return (
    <div
      className="w-full h-16 flex justify-between absolute top-0 md:hidden"
      style={{ zIndex: 5 }}
    >
      <button
        className="pl-4"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <img src={Menu} className="h-12 w-12 text-white" alt="" srcset="" />
      </button>
      <div className="center text-gray-100 w-64 text-right text-4xl">
        <a href="/#home" className="pr-4 ml-auto">
          {/* &lt;ASt /&gt; */}
          <img src={logo} className="h-12 w-36" />
        </a>
      </div>
    </div>
  );
}
