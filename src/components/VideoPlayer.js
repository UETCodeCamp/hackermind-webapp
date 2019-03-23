import React, { Component } from 'react';
import { alertText } from './../dom.js';
import { getVideo, commentVideo } from '../services/API.js';
import ReactMarkdown from 'react-markdown';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: "auto",
            video: {
                title: "title nè",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                url: ""
            },
            comments: []
        }
    }

    comment = (event) => {
        let val=document.querySelector("#comment").value;
        commentVideo(this.props.id, val).then(object => {
            if (object.success) {
                let newState = this.state.comments;
                newState.unshift({
                    content: val,
                    create_time: "1553332854981",
                    user: {
                        name: localStorage.name,
                        avatar: localStorage.avatar,
                        "id": 2
                    }
                });
                this.setState({
                    comments: newState
                })
                document.querySelector("#comment").value = "";
            } else {
                alertText("Không thể comment nội dung này");
            }
        }).catch(() => {
            alertText("Không thể comment nội dung này");
        })
        event.preventDefault();
    }

    update = (chapterID, id) => {
        this.setState({ loadding: "auto" });
        getVideo(chapterID, id).then(object => {
            if (object.success) {
                this.setState({ video: object.data.video });
                this.setState({ comments: object.data.comments });
                this.setState({ loadding: "hidden" });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id)
            this.update(nextProps.chapterID, nextProps.id);
    }
    componentDidMount() {
        this.update(this.props.chapterID, this.props.id);
    }
    render() {
        return (
            <div className="videoplayer">
                <div className={"loading " + this.state.loadding}>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
                <div id="video">
                    <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + this.state.video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="desc">
                    <h5>{this.state.video.title}</h5>
                    <ReactMarkdown source={this.state.video.description} />
                </div>
                <form onSubmit={this.comment} id="comment-input">
                    <div class="input">
                        <input id="comment" required placeholder="Nhập bình luận tại đây...." type="text" />
                    </div>
                    <button type="submit">
                        <i className="fa fa-feather-alt"></i>
                    </button>
                    <button style={{ backgroundImage: "url(" + localStorage.avatar + ")" }} className="btn-cmt">
                    </button>
                </form>
                <div id="comment-list">

                    {
                        this.state.comments.map(item => {
                            return (
                                <div className="comment-item">
                                    <span style={{ backgroundImage: "url(" + item.user.avatar + ")" }} className="comment-avt"></span>
                                    <div className="comment-content">
                                        <b><i>{item.user.name}: </i></b> {item.content}
                                    </div>
                                </div>
                            )
                        })
                    }


                    <div className="comment-item">
                        <span style={{ backgroundImage: 'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/28/13/bill-gates.jpg?w968h681)' }} className="comment-avt"></span>
                        <div className="comment-content">
                            Lorem Ipsum!
                </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoPlayer;