import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseItem extends Component {
  render() {
    return (
      <Link to={"/me/course/"+this.props.id+"/video/0"}>
        <div className="course-item">
          <div className="item-background" style={{ backgroundImage: "url(" + this.props.bg + ")" }}></div>
          <div className="item-name">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}
export default CourseItem;