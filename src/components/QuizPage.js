import React, { Component } from 'react';
import alertText from '../dom.js';
import { getQuiz } from '../services/API.js';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: "Câu hỏi 1 là?",
                    answers: [
                       {content:"Đáp án 1 nè"} ,
                       {content:"Đáp án 2 nè"} ,
                       {content:"Đáp án 3 nè"} ,
                       {content:"Đáp án 4 nè"}
                    ]
                },
                {
                    title: "Câu hỏi 2 là?",
                    answers: [
                        {content:"Đáp án 1 nè"} ,
                       {content:"Đáp án 2 nè"} ,
                       {content:"Đáp án 3 nè"} ,
                       {content:"Đáp án 4 nè"}
                    ]
                }
            ],
            list_check: []
        }
    }
    update = (chapterID, id) => {
        this.setState({ loadding: "auto" });
        getQuiz(chapterID, id).then(object => {
            console.log(object.data.quiz.questions);
            if (object.success) {
                this.setState({ list: object.data.quiz.questions })
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
    submitResult = () => {
        let vals = [];
        for (let i = 0; i < this.state.list.length; i++) {
            let ele = document.querySelector('input[name="option-' + i + '"]:checked');
            if (ele) {
                vals.push(parseInt(ele.value));
            } else {
                vals.push(-1);
            }

        }
        console.log(vals);
    }
    render() {
        return (
            <div id="quiz-content">
                <h4 className="quiz-name">Quiz: Bài tập đầu tiên</h4>
                <p className="result">Bạn đã hoàn thành trắc nghiệm với số điểm:
                <br />
                    <span className="score"><span>100</span>/100</span>
                </p>

                {
                    this.state.list.map(
                        (object, index) => {
                            let answers = object.answers.map((item, subindex) => {
                                let block = "option-" + index;
                                let id = "option-" + index + "-" + subindex;
                                return (
                                    <li>
                                        <input value={subindex} type="radio" id={id} name={block} />
                                        <label for={id}>{item.content}</label>
                                        <div class="check"></div>
                                    </li>
                                )
                            })
                            let quiz =
                                <ul className="listcheck">
                                    <p>Câu {index + 1} - {object.title}</p>
                                    {answers}
                                </ul>
                                ;

                            return quiz;
                        }
                    )
                }

                <button onClick={this.submitResult} className="m-btn">Gửi kết quả</button>
            </div>
        );
    }
}
export default QuizPage;