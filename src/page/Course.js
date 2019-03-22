import React, { Component } from 'react';
import PlanLesson from './PlanLesson';
import { Redirect } from 'react-router';


class Course extends Component {
    constructor(props) {
        super(props);
        console.log("hihi");
    }
    componentDidMount() {
        console.log(this.props);
        this.props.history.replace("/me/course/" + this.props.match.params.slug + "/video/0");
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default Course;