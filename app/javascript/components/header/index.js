import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";

import Logo from "../../../assets/images/logo.jpg";
import CenterLogo from "../../../assets/images/logo2.jpg";
import {
  CART_PAGE,
  ROOT,
  SIGN_IN_PAGE,
  SIGN_OUT_API,
  SIGN_UP_PAGE,
} from "../../services/constants";
import ProfileMenu from "./ProfileMenu";
import { getRequest } from "../../services/server";

const Header = () => {
  const history = useHistory();
  const [itemCount, setItemCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const getItemCount = () => {
    const cart = localStorage.getItem("cart");
    const user = localStorage.getItem("user");

    if (user) {
      setIsLogin(true);
    }

    if (cart) {
      const items = JSON.parse(cart);
      var count = 0;
      if (items.data.length > 0) {
        items.data.map((val) => {
          count = count + val.quantity;
        });
      }
      setItemCount(count);
    }
  };

  useEffect(() => {
    getItemCount();
    window.addEventListener("storage", getItemCount);
  }, []);

  const signOut = () => {
    getRequest(SIGN_OUT_API)
      .then((result) => {
        console.log("sign out", result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex company-logo">
          <div className="navbar-brand-box">
            <Link to={ROOT} className="logo">
              <span className="logo-lg">
                <img src={Logo} alt="" />
              </span>
            </Link>
          </div>
        </div>

        <div className="center-logo">
          <Link to={ROOT} className="logo">
            <span className="logo-lg">
              <img src={CenterLogo} alt="" height="40" />
            </span>
          </Link>
        </div>

        <div className="d-flex profile-header">
          <div
            className="cart-container"
            onClick={() => history.push(CART_PAGE)}
          >
            <CartIcon className="cart-icon" />
            {itemCount > 0 && <p className="cart-number">{itemCount}</p>}
          </div>
          {/* <ProfileMenu /> */}
          {isLogin ? (
            <Link to="#" onClick={signOut} className="header-links">
              Log Out
            </Link>
          ) : (
            <>
              <Link to={SIGN_IN_PAGE} className="header-links">
                Log In
              </Link>
              <Link to={SIGN_UP_PAGE} className="header-links">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
