import React, { Component } from 'react';
import PlanLesson from './PlanLesson';
import { Redirect } from 'react-router';
import { checkPortal } from '../services/API';
import {alertText} from '../dom.js';


class Course extends Component {
    constructor(props) {
        super(props);
        console.log("hihi");
    }
    componentDidMount() {
        console.log(this.props);
        //checkPortal
        checkPortal(this.props.match.params.slug).then(object=>{
            if(object.success){
                this.props.history.replace("/me/course/" + this.props.match.params.slug + "/video/"+object.data.id);
            }else{
                alertText("Bạn không thể tham gia khóa học này",true);
                this.props.history.replace("/me/");
            }
        }).catch({
            
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default Course;