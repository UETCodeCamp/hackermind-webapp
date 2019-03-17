import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Home from "./page/Home"
import Login from "./page/Login"
import Signup from "./page/Signup"
import PlanLesson from "./page/PlanLesson"
import './scss/index.scss';
import './scss/theme.scss';

class App extends Component {
  render(){
    return(
      <div>
      <Switch>
        <Route path="/home-course" component={Home}/>
        <Route path="/plan-lesson/:id_plan/:id" component={PlanLesson}/>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={Signup}/>
        </Switch>
         <div id="alert"></div>
       </div>
    )
  }
}

export default App;