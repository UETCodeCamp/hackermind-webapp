import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../Login.css';
class Login extends Component {
    render() {
            return (
                <div className="login-page">
                    <div id="login-form">
                        <img src="img/logo.png" />
                        <input id="email" placeholder="@username" />
                        <input id="password" placeholder="@password" type="password" />
                        {/* <button onClick={this.login}>Let's go!</button> */}
                           <Link to="/home-course"><button>Let's go!</button></Link>
                        <p>Do you have an account?
                <Link to="/signup"> Sign Up</Link>
                        </p>
                    </div>
                </div>
            )
}
}
export default Login;