import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Thunk from "./containers/GithubData";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/thunk">
          <li>Redux - Thunk</li>
        </Link>
      </ul>
      <Switch>
        <Route path="/thunk" component={Thunk} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
