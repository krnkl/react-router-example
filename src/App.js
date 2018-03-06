
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

Header.propTypes = { children: PropTypes.object.isRequired };

const Content = ({ children }) => (
    <div className="content">
        <p>Content: {children}</p>
    </div>);

Content.propTypes = { children: PropTypes.object.isRequired };

const Page = ({ children }) => (
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
    <Link isActive={isActiveFunc} activeClassName="active" to="/menu">
      Menu
    </Link>
  </nav>
);


Links.propTypes = { location: PropTypes.element.isRequired };

const Menu = () => (
    <div>
        <Header>Menu</Header>
        <Link to="/menu/menu-item-one">Appetizer</Link>
        <Link to="/menu/menu-item-two">Main course</Link>
    <Route
        path="/menu/:menuitem"
        render={({ match }) => <MenuItem>{match.params.menuitem}</MenuItem>}
    />
    </div>
);

const MenuItem = ({ children }) => (
    <div className="content">
        <p>{children}</p>
    </div>
  );

MenuItem.propTypes = { children: PropTypes.element.isRequired };

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route path="/menu" component={Menu} />
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
