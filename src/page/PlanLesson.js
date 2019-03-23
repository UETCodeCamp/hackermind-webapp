import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
import QuizPage from '../components/QuizPage';
import { getChapter, getCourse } from '../services/API';


class PlanLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mini_nav: localStorage.layout == "compact" && window.innerWidth > 768,
            show_modal: false,
            chapters: [],
            lesson: {
                type: this.props.match.params.type,
                videoID: "9XFUoBD6W8c"
            },
            course: {
                name: "",
                avatar: "/img/avatar.png",
                description: "Day la lop java"
            }

        }
    }
    componentDidMount() {
        getChapter(this.props.match.params.slug).then(object => {
            if (object.success)
                this.setState({ chapters: object.data.chapters });
        });
        getCourse(this.props.match.params.slug).then(object => {
            if (object.success)
                this.setState({ course: object.data.course });
        });
    }
    componentWillReceiveProps() {
        console.log(this.props.match);
        if (window.innerWidth <= 768) {
            this.setState({ mini_nav: false });
        }
    }
    componentDidUpdate(nextProps) {
        if (JSON.stringify(this.props.match) !== JSON.stringify(nextProps.match)) {
            let lesson = this.state.lesson;
            lesson.type = this.props.match.params.type;
            this.setState({ lesson: lesson });
        }
    }
    activeMenu = () => {
        this.setState(
            {
                mini_nav: !this.state.mini_nav
            }
        )
        if (this.state.mini_nav) {
            localStorage.layout = "expand";
        } else {
            localStorage.layout = "compact";
        }
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
                        <Link to="/me"><span onClick={this.toggleModal} id="home"><i className="fas fa-home"></i></span></Link>
                        <span onClick={this.activeMenu} id="menu-bar"><i class="fas fa-bars"></i></span>

                    </div>
                    <img className="logo" src={this.state.course.avatar} />
                    <h6>Just do it!</h6>
                    <span className="title">{this.state.course.name}</span>
                    <div id="player-btn">
                        <span><i class="fas fa-step-backward"></i></span>
                        <span onClick={this.toggleModal} id="info"><i className="fa fa-file-alt"></i></span>
                        <span><i class="fas fa-step-forward"></i></span>
                    </div>


                    <div id="road">
                        {
                            this.state.chapters.map((chapter, index) => {
                                return (
                                    <div className="chaper">
                                        <span className="unit-tilte">UNIT {index + 1}: {chapter.name}</span>
                                        <ul className="unit-item">
                                            {
                                                chapter.videos.map(video => {
                                                    return <Link to={"../video/" + video.id}> <li>{video.title}</li></Link>
                                                })
                                            }
                                            {
                                                chapter.quizzes.map(quiz => {
                                                    return <Link to={"../quiz/" + quiz.id}> <li>Quiz: {quiz.title}</li></Link>
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
            
                    </div>
                </div>
                <div id="lesson-display" className={this.state.mini_nav ? "expand" : ""}>
                    {
                        this.state.lesson.type == "video" ?
                            <VideoPlayer chapterID={this.props.match.params.slug} id={this.props.match.params.id} />
                            : <QuizPage chapterID={this.props.match.params.slug} id={this.props.match.params.id} />
                    }
                </div>
                <div style={{ display: this.state.show_modal ? "block" : "none" }} className="modal-popup">
                    <i onClick={this.toggleModal} class="fas fa-times-circle close-btn"></i>
                    <h4>Thông tin</h4>
                    <p>
                        <b>Khóa học: </b>{this.state.course.name}<br />
                    </p>
                    <p>
                        {this.state.course.description}
                    </p>

                    {/* <b>Giảng dạy: </b>Bác Dôn Xơn<br />
                        <b>Thời gian: </b>15 buổi<br />
                    </p>
                    <p><b>Mô tả: </b>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. </p> */}
                </div>
            </div >
        )
    }
}

export default PlanLesson;