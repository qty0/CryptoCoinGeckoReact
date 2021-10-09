import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Overview from "../Overview/Overview";
import Search from "../Search/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <div className="navbar navbar-expand-md navbar-light d-print-none">
          {/* nav options */}
          <Navigation />
        </div>
        <div className="page-wrapper container-xl">
              <Switch>
                <Route exact path="/">
                  <Overview />
                </Route>
                <Route exact path="/search">
                  <Search />
                </Route>
              </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
