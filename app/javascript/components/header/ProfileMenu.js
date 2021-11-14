import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { getRequest } from "../../services/server";
import { SIGN_OUT_API } from "../../services/constants";

const ProfileMenu = () => {
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("user"));
    if (result) setUser(result);
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
    <Dropdown
      isOpen={menu}
      toggle={() => setMenu(!menu)}
      className="d-inline-block"
    >
      <DropdownToggle
        className="btn header-item waves-effect d-flex"
        id="page-header-user-dropdown"
        tag="button"
        style={{ alignItems: "center" }}
      >
        <div className="header-profile-user rounded-circle">
          {user && user.first_name
            ? user.first_name.charAt(0).toUpperCase()
            : "V"}
        </div>
        <ArrowDropDownIcon />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <Link to="#" onClick={signOut} className="dropdown-item">
          <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
          <span>Sign out</span>
        </Link>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
