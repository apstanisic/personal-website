import { h } from "preact";
import App from "./components/App";
import { AppContext } from "./core/app-context";
import "./style.css";

export default function Main() {
  return (
    <AppContext>
      <App />
    </AppContext>
  );
}
