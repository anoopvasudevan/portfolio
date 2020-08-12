import React, { useState } from "react";
import * as emailjs from "emailjs-com";

import classes from "./Contact.module.css";
import SocialMediaLinks from "../../components/SocialMediaLinks/SocialMediaLinks";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [emailForm, setEmailForm] = useState(initialState);
  const [formIsValid, setFormIsValid] = useState(true);

  const formInputHandler = (e, inputType) => {
    setEmailForm({ ...emailForm, [inputType]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (emailForm.name.trim() === "" || emailForm.message.trim() === "") {
      return setFormIsValid(false);
    }

    emailjs
      .sendForm(
        "default_service",
        "portfolio_messages",
        "#emailForm",
        "user_pxsqBVDc4A1lkngY7guW7"
      )
      .then((response) => {
        setFormIsValid(true);
        setEmailForm(initialState);
      })
      .catch((err) => console.log("email send error!"));
  };

  return (
    <div className={classes.Contact}>
      <h1 className={classes.Heading}>Contact Me</h1>
      <p>Let me know your suggestions and feedback</p>
      <form
        id="emailForm"
        className={`${classes.Form} emailForm`}
        autoComplete="off"
        onSubmit={formSubmitHandler}
      >
        <input
          className={classes.FormItem}
          type="text"
          placeholder="Name"
          name="name"
          value={emailForm.name}
          autoComplete="never"
          onChange={(e) => formInputHandler(e, "name")}
        />
        <input
          className={classes.FormItem}
          type="email"
          placeholder="Email ID"
          name="email"
          value={emailForm.email}
          autoComplete="never"
          onChange={(e) => formInputHandler(e, "email")}
        />
        <textarea
          className={classes.FormItem}
          rows="7"
          cols="30"
          placeholder="Message"
          name="message"
          value={emailForm.message}
          autoComplete="never"
          onChange={(e) => formInputHandler(e, "message")}
        />
        {formIsValid ? <br /> : <p>Please fill in name and message!</p>}
        <button className={`${classes.FormButton} ${classes.FormItem}`}>
          Submit
        </button>
      </form>
      <br />
      <h3 className={classes.MediaLinksHeading}>Connect with me</h3>
      <SocialMediaLinks />
      {/* <div className={classes.MediaLinks}>
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
      </div> */}
    </div>
  );
};

export default Contact;
