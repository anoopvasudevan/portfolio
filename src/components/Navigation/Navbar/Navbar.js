import React from "react";

import classes from "./Navbar.module.css";
import NavbarItems from "../NavbarItems/NavbarItems";

const Navbar = (props) => {
  return (
    <div
      className={`${classes.Navbar} ${props.scrolled && classes.Scrolled}`}
      id="navbar"
    >
      <NavbarItems
        toggleButtonClicked={props.toggleButtonClicked}
        showNavLinks={props.showNavLinks}
        drawerClicked={props.drawerClicked}
        scrolled={props.scrolled}
      />
    </div>
  );
};

export default Navbar;
