import { h } from "preact";
import "normalize.css";
import App from "./components/App";
import "./style/index.css";
// import "./style/tailwind.min.css";
import { Providers } from "./core/state";

export default function Main() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}
