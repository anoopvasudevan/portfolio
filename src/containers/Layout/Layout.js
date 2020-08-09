import React, { useState, useEffect } from "react";

import classes from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = (e) => {
      if (window.scrollY > 0) {
        if (!scrolled) setScrolled(true);
      } else setScrolled(false);
    };
    document.addEventListener("scroll", handleWindowScroll);
    return () => {
      document.removeEventListener("scroll", handleWindowScroll);
    };
  }, [scrolled]);

  const toggleButtonClicked = () => {
    setShowNavLinks((prevState) => !prevState);
  };

  const drawerClicked = () => {
    setShowNavLinks((prevState) => !prevState);
  };

  return (
    <div className={classes.Layout}>
      <nav>
        <Navbar
          toggleButtonClicked={toggleButtonClicked}
          showNavLinks={showNavLinks}
          drawerClicked={drawerClicked}
          scrolled={scrolled}
        />
        <Backdrop show={showNavLinks} clicked={drawerClicked} />
        {/* <SideDrawer /> */}
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
