import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import Home from "./../page/Home";
import Course from "./../page/Course";
import { getProfile, logout } from './../services/API';
import PlanLesson from './PlanLesson';
import UpdatePassword from './UpdatePassword';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: !!localStorage.token,
            account: {
                user_name: "test1",
                id: 8,
                avatar: "",
                name: "loading...",
                email: "loading...",
                point: null,
                description: null,
            }
        }

        getProfile().then(object => {
            console.log(object.success);
            if (object.success) {
                let avatar = object.data.user.avatar;
                localStorage.setItem("avatar", avatar);
                localStorage.name = object.data.user.name;
                localStorage.user_name = object.data.user.user_name;
                localStorage.team_id = object.data.user.team_id;
                localStorage.point = object.data.user.point;
                this.setState({ account: object.data.user });
            } else {
                logout();
                this.setState({ loadding: "hidden" });
                this.setState({ auth: false });
            }
        })
    }
    render() {
        if (!this.state.auth) {
            return (<Redirect to="/" />);
        } else
            return (
                <div>
                    <Switch>
                        <Route exact path="/me" render={() => <Home history={this.props.history} userdata={this.state.account} />} />
                        <Route path="/me/course-intro/:slug" component={Course} />
                        <Route path="/me/course/:slug/:type/:chapter_id/:id" component={PlanLesson} />
                        <Route path="/me/update-password" component={UpdatePassword} />

                    </Switch>
                </div>

            );
    }

}

export default Auth;
