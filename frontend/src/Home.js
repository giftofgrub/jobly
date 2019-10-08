import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext.js";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div className="container text-center landing-header">
          <h1 className="mb-4 font-weight-bold">
            Jobly Home
          </h1>
        </div>
          


      </div>
    );
  }
}

export default Home;
