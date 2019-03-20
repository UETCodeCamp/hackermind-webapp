import React, { Component } from 'react';
import alertText from '../dom.js';

class QuizPage extends Component {
    state = {
        list: [
            {
                title: "Câu hỏi 1 là?",
                awnser: [
                    "Đáp án 1 nè",
                    "Đáp án 2 nè",
                    "Đáp án 3 nè",
                    "Còn đây là 4"
                ]
            },
            {
                title: "Câu hỏi 2 là?",
                awnser: [
                    "Đáp án 1 nè",
                    "Đáp án 2 nè",
                    "Đáp án 3 nè",
                    "Còn đây là 4"
                ]
            }
        ]
    }
    render() {
        return (
            <div id="quiz-content">
                <h4 className="quiz-name">Quiz: Bài tập đầu tiên</h4>
                <p className="result">Bạn đã hoàn thành trắc nghiệm với số điểm:
                <br />
                    <span className="score"><span>100</span>/100</span>
                </p>

                <ul className="listcheck">
                    <p>Học Javascript để làm gì?</p>
                    <li>
                        <input type="radio" id="f-option" name="selector" />
                        <label for="f-option">Để lập trình winform</label>
                        <div class="check"></div>
                    </li>
                    <li>
                        <input type="radio" id="f-option2" name="selector" />
                        <label for="f-option2">Để làm web</label>
                        <div class="check"></div>
                    </li>
                    <li>
                        <input type="radio" id="f-option3" name="selector" />
                        <label for="f-option3">Để lập trình app mobile</label>
                        <div class="check"></div>
                    </li>
                    <li>
                        <input type="radio" id="f-option4" name="selector" />
                        <label for="f-option4">Ví dụ tạm đã</label>
                        <div class="check"></div>
                    </li>
                </ul>

                {
                    this.state.list.map(
                        (object, index) => {
                            let awnser = object.awnser.map((item, subindex) => {
                                let id = "option-" + index;
                                return (
                                    <li>
                                        <input type="radio" id={id} name={id + "-" + subindex} />
                                        <label for={id}>{item} {id}</label>
                                        <div class="check"></div>
                                    </li>
                                )
                            })
                            let quiz =
                                <ul className="listcheck">
                                    <p>Câu {index + 1} - {object.title}</p>
                                    {awnser}
                                </ul>
                                ;

                            return quiz;
                        }
                    )
                }

                <button className="m-btn">Gửi kết quả</button>
            </div>
        );
    }
}
export default QuizPage;