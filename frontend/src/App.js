import React, { Component } from "react";
import JoblyApi from "./JoblyApi.js";
import Navigation from "./Navigation.js"
import AppContext from "./AppContext.js";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      userInfoLoaded: false
    }
  }

  render(){
    return (
      <div className="App">
        <AppContext.Provider value={this.state.currentUser}>
          <BrowserRouter>
            <Navigation logout={this.handleLogout}/>
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
