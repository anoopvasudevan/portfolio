import React from "react";

// import classes from "./Landing.module.css";
import classes from "./Landing.module.css";
import profilePhoto from "../../assets/images/myphoto.jpg";

const Landing = () => {
  return (
    <section className={classes.Landing}>
      <div className={classes.MainDiv}>
        <div className={classes.ProfilePicDiv}>
          {/* <div> */}
            <img src={profilePhoto} alt="Profile Pic" />
          {/* </div> */}
        </div>
        <div className={classes.IntroDiv}>
          <h1>
            hello<span></span>
          </h1>
          <h1>I am</h1>
          <h1>
            <span>a</span>noop <span>v</span>asudevan
          </h1>
          <h3 className={classes.LandingTechRole}>Full-Stack Web Developer</h3>
        </div>
      </div>
    </section>
  );
};

export default Landing;
