import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { changePassword } from '../services/API.js';
import {alertText} from '../dom.js';
import './../Login.css';
class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            done: false
        }
    }
    changePassword=(event)=>{
        console.log(this.state);
        if(document.getElementById("password").value!=document.getElementById("repassword").value){
            alertText("Mật khẩu không khớp!",true)
        }else
        alertText("Đang gửi dữ liệu....")
        changePassword(document.getElementById("oldpassword").value, document.getElementById("password").value).then(
            object =>{
                console.log(object);
                if(!object.success){
                    alertText(object.reason,true);
                }else{
                    alertText("Đổi mật khẩu hoàn tất!",true);
                    this.setState({
                        done: true
                    });
                }
            }
        );
        event.preventDefault();
    }
    render() {
        if(this.state.done){
            return (<Redirect to="/"/>);
        }else
            return (
                <div className="login-page">
                    <form onSubmit={this.changePassword} id="login-form">
                   <Link to="/"><div class="back">&lsaquo;</div>	</Link>
                        <img src="/img/logo.png" />
                        <input require id="oldpassword" type="password" placeholder="@oldpassword" />
                        <input require className="signup-password" style={{marginRight:"1%"}} id="password" placeholder="@password" type="password" />
                        <input require className="signup-password" id="repassword" placeholder="@re-password" id="repassword" type="password" />
                        <button type="submit">Cập nhật mật khẩu mới!</button>
                    </form>
                </div>
            )
    }
}

export default UpdatePassword;