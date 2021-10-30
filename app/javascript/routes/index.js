import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/pages/Home";
import Category from "../components/pages/Category";

export default (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category/:id" component={Category} />
    </Switch>
  </Router>
);
