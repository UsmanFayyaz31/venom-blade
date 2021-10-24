import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const ProfileMenu = () => {
  const [user, setUser] = useState({ username: "usman" });
  const [menu, setMenu] = useState(false);

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
          {user && user.username.charAt(0).toUpperCase()}
        </div>
        <ArrowDropDownIcon />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <Link to="#" className="dropdown-item">
          <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
          <span>Sign out</span>
        </Link>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
