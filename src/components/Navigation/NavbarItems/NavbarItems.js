import React from "react";

import classes from "./NavbarItems.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import NavbarLink from "./NavbarLink/NavbarLink";

const NavbarItems = (props) => {
  return (
    <div
      className={classes.NavbarItems}
      // onClick={props.showNavLinks ? props.drawerClicked : undefined}
    >
      <div className={classes.NavbarItemsLeft}>
        <ToggleButton
          clicked={props.toggleButtonClicked}
          showNavLinks={props.showNavLinks}
        />
        <NavbarBrand />
      </div>
      <div
        className={`${classes.NavbarItemsRight} ${
          props.showNavLinks && classes.NavbarItemsRightActive
        }`}
        onClick={props.showNavLinks ? props.drawerClicked : undefined}
      >
        <div className={classes.NavbarItem}>
          <NavbarLink link="/about" scrolled={props.scrolled}>
            About
          </NavbarLink>
        </div>

        <div className={classes.NavbarItem}>
          <NavbarLink link="/projects" scrolled={props.scrolled}>
            Projects
          </NavbarLink>
        </div>

        <div className={classes.NavbarItem}>
          <NavbarLink link="/contact" scrolled={props.scrolled}>
            Contact
          </NavbarLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarItems;
