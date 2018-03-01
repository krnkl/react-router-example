import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch
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
const Page = ({ children }) => {
  console.log(`${children} match:`);
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
    <Link to="/components?id=component-one">Component1</Link>
  </nav>
);
const Comp = ({ match, location }) => {
  console.log("Component match", match);
  return (
    <div>
      <h2>Component {}</h2>
      <p>{JSON.stringify(location)}</p>
      <p>{new URLSearchParams(location.search).get("id")}</p>
    </div>
  );
};
const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route
          exact
          path="/:page(!components)?"
          render={({ match }) => <Page>{match.params.page || "home"}</Page>}
        />
        <Route path="/components" component={Comp} />
        <Route render={() => <h2>PageNotFound</h2>} />
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
