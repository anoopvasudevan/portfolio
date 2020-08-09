import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavbarBrand.module.css";

const NavbarBrand = () => {
  return (
    <div className={classes.NavbarBrand}>
      <NavLink to="/" exact>
        <span>AV</span>
      </NavLink>
    </div>
  );
};

export default NavbarBrand;
