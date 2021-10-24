import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/pages/Home";

export default (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
