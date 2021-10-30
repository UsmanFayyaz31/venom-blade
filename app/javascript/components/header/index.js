import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.jpg";
import CenterLogo from "../../../assets/images/logo2.jpg";
import { ROOT } from "../../services/constants";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
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

        <div className="d-flex">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
