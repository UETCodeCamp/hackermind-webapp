import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import './../Login.css';
import {alertText} from './../dom.js';
import {login} from './../services/API'
class Login extends Component {
    state = {
        auth: false
    }
    login = () => {
        alertText("Đang gửi dữ liệu....",true);
        login({
            user_name: document.getElementById("user_name").value,
            password: document.getElementById("password").value,
        }).then(object => {
            console.log(object);
            if (object.success) {
                console.log(object);
                localStorage.token = object.data.token;
                this.setState(
                    {
                        auth: true
                    }
                );
            } else {
                alertText(object.reason);
            }
        }
        );
    }
    render() {
        if(this.state.auth){
            return (<Redirect to="/home-course"/>);
        }else
        return (
            <div className="login-page">
                <div id="login-form">
                    <img src="img/logo.png" />
                    <input id="user_name" placeholder="@username" />
                    <input id="password" placeholder="@password" type="password" />
                    <button onClick={this.login}>Let's go!</button>
                    {/* <Link to="/home-course"><button>Let's go!</button></Link> */}
                    <p>Bạn chưa có tài khoản?
                <Link to="/signup"> Đăng ký</Link>
                    </p>
                </div>
            </div>
        )
    }
}
export default Login;