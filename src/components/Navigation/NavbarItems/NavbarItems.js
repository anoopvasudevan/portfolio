import React from "react";

import classes from "./NavbarItems.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import NavbarLink from "./NavbarLink/NavbarLink";

const NavbarItems = (props) => {
  return (
    <div className={classes.NavbarItems}>
      <div className={classes.NavbarItemsLeft}>
        <ToggleButton clicked={props.toggleButtonClicked} />
        <NavbarBrand />
      </div>
      <div
        className={
          props.showNavLinks
            ? classes.NavbarItemsRightActive
            : classes.NavbarItemsRight
        }
        onClick={props.showNavLinks ? props.drawerClicked : undefined}
      >
        {/* <div className={classes.NavbarItemsRight}> */}
        {/* <div className={classes.NavbarItemsRightActive}> */}
        <NavbarLink
          link="/about"
          className={classes.NavbarItem}
          scrolled={props.scrolled}
        >
          About
        </NavbarLink>
        <NavbarLink
          link="/projects"
          className={classes.NavbarItem}
          scrolled={props.scrolled}
        >
          Projects
        </NavbarLink>
        <NavbarLink
          link="/contact"
          className={classes.NavbarItem}
          scrolled={props.scrolled}
        >
          Contact
        </NavbarLink>
      </div>
    </div>
  );
};

export default NavbarItems;
