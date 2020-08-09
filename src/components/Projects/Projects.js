import React from "react";

import classes from "./Projects.module.css";
import Project from "./Project/Project";

import yelpCampImg from "../../assets/images/yelp-camp.png";
import burgerBuilderImg from "../../assets/images/burger-builder.png";

const myProjects = [
  {
    name: "YelpCamp",
    description: "An e-commerce app for campground details and reviews",
    image: yelpCampImg,
    link: "https://damp-bastion-51372.herokuapp.com/campgrounds",
  },
  {
    name: "Burger Builder",
    description: "An app that helps you build your own burger and order it!",
    image: burgerBuilderImg,
    link: "https://react-burger-builder-9d634.web.app/burger-builder/",
  },
  {
    name: "YelpCamp2",
    description: "An e-commerce app for campground details and reviews",
    image: yelpCampImg,
    link: "https://damp-bastion-51372.herokuapp.com/campgrounds",
  },
];

const Projects = () => {
  // const order = -1;

  const allProjects = [];
  myProjects.forEach((project) => {
    allProjects.push(<Project key={project.name} {...project} />);
  });

  return (
    <div className={classes.Projects}>
      <h1 className={classes.Heading}>Projects</h1>
      <div className={classes.AllProjects}>{allProjects}</div>
    </div>
  );
};

export default Projects;
