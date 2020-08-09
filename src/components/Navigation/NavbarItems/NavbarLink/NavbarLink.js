import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavbarLink.module.css";

const NavbarLink = (props) => {
  return (
    <div className={classes.NavbarLink}>
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        className={`${props.scrolled && classes.Scrolled}`}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default NavbarLink;
