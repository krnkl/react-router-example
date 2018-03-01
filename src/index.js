import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from "react-router-dom";
import { render } from "react-dom";

const styles = {
  fontFamily: "anonymous-pro",
  textAlign: "center"
};
const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match;
};
const Page = ({ children, match }) => {
  console.log(`${children} match:`, match);
  return <h1>{children}</h1>;
};

const Links = () => (
  <nav>
    <Link exact activeClassName="active" to="/">
      Home
    </Link>
    {"  "}
    <Link to={{ pathname: "/about" }}>About</Link>
    {"  "}
    <Link isActive={isActiveFunc} activeClassName="active" to="/contact">
      Contact
    </Link>
    {"  "}
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route
        path="/:page?"
        render={({ match }) => <Page>{match.params.page || "home"}</Page>}
      />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
