import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Nutshell.css";

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        {localStorage.setItem("credentials", 2)}
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Nutshell;
