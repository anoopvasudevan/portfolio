import React from "react";

import classes from "./Footer.module.css";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <SocialMediaLinks />
      <p className={classes.FooterCopyright}>Copyright © 2020 Anoop Vasudevan. All rights reserved</p>
    </footer>
  );
};

export default Footer;
