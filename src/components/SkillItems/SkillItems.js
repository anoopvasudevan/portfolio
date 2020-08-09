import React from "react";

import classes from "./SkillItems.module.css";
import SkillItem from "./SkillItem/SkillItem";

const SkillItems = (props) => {
  const skillItems = [];
  props.skillSet.forEach((item) => {
    skillItems.push(<SkillItem key={item.header} {...item} />);
  });

  return <div className={classes.SkillItems}>{skillItems}</div>;
};

export default SkillItems;
