import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import classes from "./App.module.css";
import Layout from "./containers/Layout/Layout";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <main className={classes.MainPageContent}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Landing} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
