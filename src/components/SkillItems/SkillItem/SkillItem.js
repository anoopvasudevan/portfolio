import React from "react";

import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  const [html5Icon, cssIcon, jsIcon] = props.langIcons;

  return (
    <div className={classes.SkillItem}>
      <img className={classes.SkillIcon} src={props.icon} alt="Skill Icon" />
      <h3 className={classes.SkillHeader}>{props.header}</h3>
      <p className={classes.SkillDescription}>{props.description}</p>
      <div className={classes.TechStack}>
        <div data-name="HTML5">
          <img className={classes.SkillIcon} src={html5Icon} alt="HTML5" />
        </div>
        <div data-name="CSS3">
          <img className={classes.SkillIcon} src={cssIcon} alt="CSS3" />
        </div>
        <div data-name="JavaScript">
          <img className={classes.SkillIcon} src={jsIcon} alt="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
