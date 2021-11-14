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
import {
  CART_PAGE,
  CURRENT_USER,
  ROOT,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
} from "../services/constants";

const Routes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRequest(CURRENT_USER)
      .then((res) => {
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.dispatchEvent(new Event("storage"));
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ROOT} exact component={Home} />
        <Route path={SIGN_IN_PAGE} component={SignIn} />
        <Route path={SIGN_UP_PAGE} component={SignUp} />
        <Route path="/category/:id" component={Category} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path={CART_PAGE} component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
