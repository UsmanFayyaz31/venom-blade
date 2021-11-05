import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/pages/Home";
import Category from "../components/pages/Category";
import ProductDetails from "../components/pages/ProductDetails";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";

export default (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/category/:id" component={Category} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  </Router>
);
