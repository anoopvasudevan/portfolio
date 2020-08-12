import React from "react";

import classes from "./About.module.css";
import SkillItems from "../SkillItems/SkillItems";
import codingIcon from "../../assets/images/code.png";
import frameworkIcon from "../../assets/images/framework.png";
import webservicesIcon from "../../assets/images/api.png";
import html5Icon from "../../assets/images/html5.png";
import cssIcon from "../../assets/images/css3.png";
import jsIcon from "../../assets/images/js.png";

const skillSet = [
  {
    icon: codingIcon,
    header: "Programmming Languages",
    description: "In depth knowledge and skill in the following technologies",
    langIcons: [html5Icon, cssIcon, jsIcon],
  },
  {
    icon: frameworkIcon,
    header: "Frameworks / Libraries",
    description: "In depth knowledge and skill in the following technologies",
    langIcons: [html5Icon, cssIcon, jsIcon],
  },
  {
    icon: webservicesIcon,
    header: "Web Services",
    description: "In depth knowledge and skill in the following technologies",
    langIcons: [html5Icon, cssIcon, jsIcon],
  },
];

const About = () => {
  return (
    <section className={classes.About}>
      <div className={classes.Info}>
        <h1>
          <span>ABOUT ME</span>, my <a href="#skillset">SKILLSET</a> and{" "}
          <a href="#experience">EXPERIENCE</a>
        </h1>
        My name is <span id="name">Anoop Vasudevan</span> and I am a full-stack
        developer.
      </div>

      <h1 className={classes.Heading}>SKILLSET</h1>
      
      <div className={classes.Skills}>
        <SkillItems skillSet={skillSet} />
      </div>

      {/* <section id="experience" className={classes.Skills}>
        <h3 className={classes.Heading}>EXPERIENCE</h3>
        <SkillItems />
      </section> */}
    </section>
  );
};

export default About;
