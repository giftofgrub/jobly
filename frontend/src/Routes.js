import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Companies from "./Companies.js";
import Company from "./Company.js";
import Jobs from "./Jobs.js";


class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route 
            exact 
            path="/"
            render={() => <Home></Home>}
          />

          <Route 
            exact
            path="/companies"
            render={(props) => <Companies {...props} getCurrentUser={this.props.getCurrentUser}></Companies>}
          />

          <Route 
            exact
            path="/jobs"
            render={(props) => <Jobs {...props} getCurrentUser={this.props.getCurrentUser}></Jobs>}
          />

          <Route 
            path="/companies/:handle"
            render={props => <Company {...props} getCurrentUser={this.props.getCurrentUser}/>}
          />

        </Switch>
      </div>
    );
  }

}

export default Routes;