import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import './../Login.css';
import { alertText } from './../dom.js';
import { login } from './../services/API'
class Login extends Component {
    state = {
        auth: !!localStorage.token
    }
    login = (event) => {
        alertText("Đang gửi dữ liệu....", true);
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
        ).catch(function () {
            alertText("Lỗi kết nối! Vui lòng thử lại sau.");
        });
        event.preventDefault();
    }
    componentDidMount(){
        document.body.style.backgroundColor="#5c7ca1";
    }
    render() {
        if (this.state.auth) {
            return (<Redirect to="/me" />);
        } else
            return (
                <div className="login-page">
                    <form onSubmit={this.login} id="login-form">
                        <img src="img/logo.png" />
                        <input required id="user_name" autocapitalize="off" placeholder="@username" />
                        <input required id="password" placeholder="@password" type="password" />
                        <button type="submit">Let's go!</button>
                        {/* <Link to="/home-course"><button>Let's go!</button></Link> */}
                        <p>Bạn chưa có tài khoản?
                <Link to="/signup"> Đăng ký</Link>
                        </p>
                    </form>
                </div>
            )
    }
}
export default Login;