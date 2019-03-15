import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team_modal: false
    }
  }
  teamModal = () => {
    this.setState({
      team_modal: !this.state.team_modal
    })
  }
  render() {
    return (
      <div className="course-home">
        <header>
          <span id="appname">UET CodeCamp</span>
          <div id="account">
            <span class="icon">C</span>
            <span class="name">Trần Mạnh Cường</span>
            <a href="mailto:iammaytinhdibo@gmail.com"> <span class="logout">Phản hồi</span></a>
            <span onClick={this.teamModal} class="name">Teammate</span>
            <Link to="/"> <span class="logout">Logout</span></Link>
          </div>
        </header>
      
          <TeamModal closeTeamModal={this.teamModal} display={this.state.team_modal} /> 


        <div className="body-page">
          <Row>
            <Col lg="9" >
              <Row>
                <Col lg="4" md="6">
                  <Link to="/plan-lesson/1">
                    <div className="course-item">
                      <div className="item-background" style={{ backgroundImage: "url(https://hourofcode.com/images/social-media/hoc-2018-creativity.png)" }}></div>
                      <div className="item-name">Khóa học Java</div>
                    </div>
                  </Link>
                </Col>
                <Col lg="4" md="6">
                  <Link to="/">
                    <div className="course-item">
                      <div className="item-background" style={{ backgroundImage: "url(https://hourofcode.com/images/social-media/hoc-2018-creativity.png)" }}></div>
                      <div className="item-name">Khóa học Java</div>
                    </div>
                  </Link>
                </Col>
                <Col lg="4" md="6">
                  <Link to="/">
                    <div className="course-item">
                      <div className="item-background" style={{ backgroundImage: "url(https://hourofcode.com/images/social-media/hoc-2018-creativity.png)" }}></div>
                      <div className="item-name">Khóa học Java</div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col lg="3" sm="12">
              <div className="activity-personal">
                <h5>Cá nhân</h5>
                <div className="cover-img"></div>
                <div style={{ backgroundImage: "url(https://vtv1.mediacdn.vn/thumb_w/650/2019/3/4/meng-wanzhou-720-huawei-cfo-15516643489751859586803-1551674039895410451295.jpg)" }}
                  className="avatar"></div>
                <div className="infomation">
                  <span className="name">Nguyễn Thị Dô Dép</span>
                  <span className="name">Java Plan</span>
                  <span className="name">150 points</span>
                  <span>Joined on Oct 2018</span>
                  <span className="bio">Bio: Không có gì là không thể, chỉ có thể bạn không làm được</span>
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
