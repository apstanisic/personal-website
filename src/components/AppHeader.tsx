import { h } from "preact";
import { useContext } from "preact/hooks";
import logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import { UiContext } from "../core/ui";

export default function AppFooter() {
  const context = useContext(UiContext);

  return (
    <div
      className="w-full h-16 flex justify-between absolute top-0 md:hidden"
      style={{ zIndex: 5 }}
    >
      <button className="pl-4" onClick={() => context.setShowSidebar(true)}>
        <img src={Menu} className="h-12 w-12 text-white" alt="menu icon" srcSet="" />
      </button>
      <div className="center text-gray-100 w-64 text-right text-4xl">
        <button className="pr-4 ml-auto">
          {/* &lt;ASt /&gt; */}
          <img src={logo} className="h-12 w-36" alt="logo" />
        </button>
      </div>
    </div>
  );
}
