import React from "react";
import classes from "./SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
  return (
    <div className={classes.SocialMediaLinks}>
      <a
        className={classes.Instagram}
        href="https://www.instagram.com/anoopvasu2015/"
      >
        <span className="fab fa-instagram"></span>
      </a>
      <a className={classes.LinkedIn} href="/">
        <span className="fab fa-linkedin-in"></span>
      </a>
      <a className={classes.GitHub} href="/">
        <span className="fab fab fa-github"></span>
      </a>
      <a className={classes.Gmail} href="/">
        <span className="far fa-envelope"></span>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
