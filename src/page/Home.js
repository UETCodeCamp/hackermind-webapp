import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {checkPortal} from './../services/API';
import {alertText} from './../dom.js';
import './../App.css';
import './../Home.css';
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
import TeamModal from '../components/TeamModal';
import CourseItem from '../components/CourseItem';
import { getAllCourse, logout } from '../services/API';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth:!!localStorage.token,
      team_modal: false,
      account:{
        user_name: !!localStorage.user_name?localStorage.user_name:"loading...",
        id: 8,
        avatar: null,
        name: !!localStorage.name?localStorage.name:"loading...",
        email: "loading...",
        point: null,
        description: null,
      },
      teams:[
        {
          name:"Team 1 nè",
          id:1
        },
        {
          name:"Team 1 nè",
          id:2
        }
      ],
      listCourse: []
    }

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.userdata);
    this.setState({
      account:nextProps.userdata
    })
  }

  componentDidMount(){
    getAllCourse().then(object=>{
      console.log(object);
      if(object.success){
        this.setState({listCourse:object.data.courses});
      }

    })
  }

  teamModal = (id) => {
    this.setState({
      team_modal: !this.state.team_modal,
    })
  }

  logOut=()=>{
    logout();
    this.setState({auth:false});
  }
  
  accessCourse=(id)=>{
    console.log(this.props);
    alertText("Loading...",true);
    checkPortal(id).then(object=>{
      if(object.success){
          this.props.history.push("/me/course/" + id + "/video/"+object.data.chapter_id+"/"+object.data.video_id);
      }else{
          alertText(object.reason,true);
      }
  }).catch({
      
  })
  }

  render() {
    if(!this.state.auth){
      return (<Redirect to="/"/>);
    }else
    return (
      <div className="course-home">
        <header>
          <span id="appname">
            <img src="/img/icon.png" />
            Hackermind</span>
          <div id="account">
            <span className="icon">{this.state.account.name.split(" ")[this.state.account.name.split(" ").length-1][0].toUpperCase()}</span>
            <span className="name">{this.state.account.name}</span>
            <Link to="/me/update-password"><span className="logout">Cập nhật mật khẩu</span></Link>
            <span onClick={()=>this.teamModal()} className="name">Teammate</span>
            {/* {
              this.state.teams.map(item => {
              return(
                <span onClick={()=>this.teamModal(item.id)} className="name">{item.name}</span>
              )
            })
            } */}
            <span onClick={this.logOut} className="logout">Đăng xuất</span>
          </div>
        </header>

        <TeamModal id={this.props.userdata.team_id} closeTeamModal={this.teamModal} display={this.state.team_modal} />


        <div className="body-page">
          <Row>
            <Col lg="9" >
              <Row>
                {this.state.listCourse.length==0?
                <div style={{margin:"90px auto"}}>
                <div className="lds-ripple"><div></div><div></div></div>
                </div>:""  
              }
                {this.state.listCourse.map(item => {
                  return (
                    <Col lg="4" md="6">
                      <CourseItem access={this.accessCourse} name={item.name} id={item.id} bg={item.image} />
                    </Col>
                  );
                })}

              </Row>
            </Col>

            <Col lg="3" sm="12">
              <div className="activity-personal">
                <h5>Cá nhân</h5>
                <div className="cover-img"></div>
                <div style={{ backgroundImage: "url("+localStorage.avatar+")" }}
                  className="avatar"></div>
                <div className="infomation">
                  <span className="name">{this.state.account.name}</span>
                  <span className="name">{this.state.account.user_name}</span>
                  <span className="name">{this.state.account.point} points</span>
                  <span>Joined on Mar 2019</span>
                  <span className="bio">Bio: Sử dụng phần mềm mà gặp lỗi thì chỉ bực mình một ngày. Làm nghề lập trình, lúc nào cũng gặp bug nên bực mình cả đời.
          
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div >
    );
  }

}

export default Home;
