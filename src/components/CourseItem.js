import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseItem extends Component {
  render() {
    return (
      <Link to={"/plan-lesson/"+this.props.id}>
        <div className="course-item">
          <div className="item-background" style={{ backgroundImage: "url(" + this.props.bg + ")" }}></div>
          <div className="item-name">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}
export default CourseItem;