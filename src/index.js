import { h } from "preact";
// import "normalize.css";
import App from "./components/App";
import "./style.css";
// import "./style/tailwind.min.css";
import { AppContext } from "./core/app-context";

export default function Main() {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
}
