import { h } from "preact";
import { Route, Router } from "preact-router";

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

function About() {
  return <div>Hello About</div>;
}

function Hello() {
  return <div>Hello Hello</div>;
}

function World() {
  return <div>Hello World</div>;
}
export default function App() {
  return (
    <div id="app">
      <Router>
        <Route path="/" component={Hello} />
        <Route path="/profile/" component={World} />
        <Route path="/profile/:user" component={About} />
      </Router>
    </div>
  );
}
