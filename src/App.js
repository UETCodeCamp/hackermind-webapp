import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./page/Login"
import Signup from "./page/Signup"
import Auth from "./page/Auth"

import './scss/index.scss';
import './scss/theme.scss';
import UpdatePassword from './page/UpdatePassword';

class NotFound extends Component {
  render() {
   return(
    <div>Not found</div>
   ) 
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/me/" component={Auth} />
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/update-password" component={UpdatePassword} />
          <Route component={NotFound} />
        </Switch>
        <div id="alert"></div>
      </div>
    )
  }
}

export default App;