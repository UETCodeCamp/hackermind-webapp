import React, { Component } from 'react';
import alertText from './../dom.js';

class VideoPlayer extends Component {
   
    render() {
        return(
            <div>
            <div id="video">
                <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+this.props.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div id="comment-input">
                <div class="input">
                    <input placeholder="Nhập bình luận của bạn tại đây...." type="text" />
                </div>
                <button>
                    <i className="fa fa-feather-alt"></i>
                </button>
                <button className="btn-cmt">
                    <i className="fa fa-user"></i>
                </button>
            </div>
            <div id="comment-list">
                <div className="comment-item">
                    <span style={{ backgroundImage: 'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/28/13/bill-gates.jpg?w968h681)' }} className="comment-avt"></span>
                    <div className="comment-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                </div>

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