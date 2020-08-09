import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./containers/Layout/Layout";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./containers/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
