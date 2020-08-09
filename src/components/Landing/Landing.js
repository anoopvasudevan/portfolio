import React from "react";

import classes from "./Landing.module.css";
import profilePhoto from "../../assets/images/profile.jpeg";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <section className={classes.ProfilePic}>
        <div>
          <img src={profilePhoto} alt="Profile Pic" />
        </div>
      </section>
      <section className={classes.IntroText}>
        <h1>
          hello<span></span>
        </h1>
        <h1>I am</h1>
        <h1>
          <span>a</span>noop <span>v</span>asudevan
        </h1>
        <h3 className={classes.LandingTechRole}>
         Full-stack Web Developer
        </h3>
      </section>
    </div>
  );
};

export default Landing;
