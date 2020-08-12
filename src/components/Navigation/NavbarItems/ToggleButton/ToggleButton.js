import React from "react";

import classes from "./ToggleButton.module.css";

const ToggleButton = (props) => {
  return (
    <div
      className={`${classes.ToggleButton} ${props.showNavLinks && classes.Rotate}`}
      onClick={props.clicked}
    >
        <span></span>
        {/* <span></span>
        <span></span> */}
    </div>
  );
};

export default ToggleButton;
