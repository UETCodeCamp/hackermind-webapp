import React, { Component } from 'react';
import { alertText } from './../dom.js';
import { getQuiz, submitQuiz } from '../services/API.js';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: "auto",
            title: "Bài tập đầu tiên",
            description: "",
            point: -1,
            list: [
                {
                    title: "Câu hỏi 1 là?",
                    answers: [
                        { content: "Đáp án 1 nè" },
                        { content: "Đáp án 2 nè" },
                        { content: "Đáp án 3 nè" },
                        { content: "Đáp án 4 nè" }
                    ]
                },
                {
                    title: "Câu hỏi 2 là?",
                    answers: [
                        { content: "Đáp án 1 nè" },
                        { content: "Đáp án 2 nè" },
                        { content: "Đáp án 3 nè" },
                        { content: "Đáp án 4 nè" }
                    ]
                }
            ],
            list_check: []
        }
    }
    update = (chapterID, id) => {
        this.setState({ loadding: "auto" });
        getQuiz(chapterID, id).then(object => {
            console.log(object.data);
            if (object.success) {
                this.setState({ title: object.data.quiz.title });
                this.setState({ description: object.data.quiz.description });
                this.setState({ list: object.data.quiz.questions });
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
    submitResult = () => {
        let vals = [];
        for (let i = 0; i < this.state.list.length; i++) {
            let ele = document.querySelector('input[name="option-' + i + '"]:checked');
            if (ele) {
                vals.push({
                    question_id: ele.getAttribute("data-id"),
                    choose_answer: [parseInt(ele.value)]
                });
            }
        }
        if (vals.length != this.state.list.length) {
            alertText("Bạn phải nhập đủ dữ liệu", false);
        } else {
            submitQuiz(vals, this.props.id).then(object => {
                console.log(object);
                if (object.success) {
                    this.setState({point:object.data.point});
                }
            });
        }
        console.log(vals);
    }
    render() {
        return (
            <div id="quiz-content">
                <div className={"loading " + this.state.loadding}>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
                <h4 className="quiz-name">Quiz: {this.state.title}</h4>
                <p className="desc">{this.state.description}</p>
                {
                   this.state.point>=0? <p className="result">Bạn đã hoàn thành trắc nghiệm với số điểm:
                    <br />
                        <span className="score"><span>{this.state.point}</span>/{this.state.list.length * 10}</span>
                    </p>:""
                }


                {
                    this.state.list.map(
                        (object, index) => {
                            let answers = object.answers.map((item, subindex) => {
                                let block = "option-" + index;
                                let id = "option-" + index + "-" + subindex;
                                return (
                                    <li>
                                        <input data-id={item.question_id} value={subindex} type="radio" id={id} name={block} />
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