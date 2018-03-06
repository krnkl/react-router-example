
import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch
} from "react-router-dom";
import "./App.css";

const isActiveFunc = (match) => (match);
const Header = ({ children }) => (
    <div className="header">
        <h1>Title: {children}</h1>
    </div>);

const Content = ({ children }) => (
    <div className="content">
        <p>Content: {children}</p>
    </div>);

const Page = ({children}) => (
    <div>
        <Header >{children}</Header>
        <Content>{children}</Content>
    </div>);

Page.propTypes = { children: PropTypes.object.isRequired };

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


Links.propTypes = { location: PropTypes.element.isRequired };

const Comp = ({ location }) => (
    <div className="content">
      <h2>Component {}</h2>
      <p>{JSON.stringify(location)}</p>
      <p>{new URLSearchParams(location.search).get("id")}</p>
    </div>
  );

Comp.propTypes = { location: PropTypes.element.isRequired };

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route path="/components" component={Comp} />
        <Route
          exact
          path="/:page?"
          render={({ match }) => <Page>{match.params.page || "home"}</Page>}
        />
        <Route render={() => <h2>PageNotFound</h2>} />
      </Switch>
    </div>
  </Router>
);

export default App;
