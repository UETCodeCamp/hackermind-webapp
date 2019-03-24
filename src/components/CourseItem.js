import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseItem extends Component {
  render() {
    return (
     
        <div title={this.props.name} onClick={()=>this.props.access(this.props.id)} className="course-item">
          <div className="item-background" style={{ backgroundImage: "url(" + this.props.bg + ")" }}></div>
          <div className="item-name">{this.props.name}</div>
        </div>
   
    );
  }
}
export default CourseItem;