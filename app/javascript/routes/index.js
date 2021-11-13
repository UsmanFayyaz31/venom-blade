import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/pages/Home";
import Category from "../components/pages/Category";
import ProductDetails from "../components/pages/ProductDetails";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import Cart from "../components/pages/Cart";
import { getRequest } from "../services/server";
import { CURRENT_USER } from "../services/constants";

const Routes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRequest(CURRENT_USER)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/category/:id" component={Category} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
