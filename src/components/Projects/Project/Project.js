import React from "react";

import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={classes.Project}>
      <div className={classes.ProjectInfo}>
        <h3 className={classes.ProjectHeading}>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.ProjectSnapshot}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt="Project Landing Page" />
        </a>
      </div>
    </div>
  );
};

export default Project;
