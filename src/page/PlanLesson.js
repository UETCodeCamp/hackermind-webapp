import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container, Row, Col
} from 'reactstrap';
import './../scss/checkbox.scss';
import VideoPlayer from '../components/VideoPlayer';


class PlanLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mini_nav: false,
            show_modal:false
        }
    }
    activeMenu = () => {
        this.setState(
            {
                mini_nav: !this.state.mini_nav
            }
        )
    }
    toggleModal = () => this.setState({
        show_modal: !this.state.show_modal
    })

    render() {
        return (
            <div className="plan-lesson">
                <div id="nav-lesson" className={this.state.mini_nav ? "activeMenu" : ""}>
                    <div id="nav-action">
                        <span onClick={this.activeMenu} id="nav-btn"><i className="fa fa-angle-left"></i></span>
                        <span onClick={this.toggleModal} id="info"><i className="fa fa-file-alt"></i></span>
                        <span onClick={this.activeMenu} id="menu-bar"><i class="fas fa-bars"></i></span>
                        
                    </div>
                    <img className="logo" src="http://iconsetc.com/icons-watermarks/flat-square-white-on-pink/raphael/raphael_node-js/raphael_node-js_flat-square-white-on-pink_512x512.png" />
                    <h6>Just do it!</h6>
                    <span className="title">Java Plan for newbie</span>
                    <div id="road">
                        <span className="unit-tilte">UNIT 1: What is Javascript</span>
                        <ul className="unit-item">
                            <li>Làm quen với JS</li>
                            <li>Viết chương trình đầu tiên</li>
                            <li>Nodejs là gì</li>
                        </ul>

                        <span className="unit-tilte">PRACTICE 1: First program</span>
                        <ul className="unit-item">
                            <li>Làm quen với JS</li>
                            <li>Viết chương trình đầu tiên</li>
                            <li>Nodejs là gì</li>
                        </ul>

                        <span className="unit-tilte">UNIT 2: Get started with Node.js</span>
                        <ul className="unit-item">
                            <li>Làm quen với Node</li>
                            <li>Viết chương trình đầu tiên</li>
                            <li>Nodejs là gì</li>
                        </ul>
                    </div>
                </div>
                <div id="lesson-display" className={this.state.mini_nav ? "expand" : ""}>
                    <VideoPlayer />
                </div>
                <div style={{display:this.state.show_modal?"block":"none"}} className="modal-popup">
                <i onClick={this.toggleModal} class="fas fa-times-circle close-btn"></i>
                <h4>Thông tin</h4>
                <p>
                <b>Khóa học: </b>Nodejs cho người mới bắt đầu!<br/>
                <b>Giảng dạy: </b>Bác Dôn Xơn<br/>
                <b>Thời gian: </b>15 buổi<br/>
                </p>
                <p><b>Mô tả: </b>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. </p>
                </div>
            </div >
        )
    }
}

export default PlanLesson;