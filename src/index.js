import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

const styles = {
  fontFamily: "anonymous-pro",
  textAlign: "center"
};

const Home = props => {
  console.log(props);
  return <h1>Hello</h1>;
};
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));

// <div style={styles}>
//   <Hello name="CodeSandbox" />
//   <h2>Start editing to see some magic happen {"\u2728"}</h2>
// </div>
