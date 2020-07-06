import { h } from "preact";
import App from "./components/App";
import "./style.css";
import { AppContext } from "./core/app-context";

export default function Main() {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
}
