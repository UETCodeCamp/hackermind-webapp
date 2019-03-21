import React, { Component } from 'react';
import alertText from '../dom.js';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    title: "Câu hỏi 1 là?",
                    awnser: [
                        "Đáp án 1 nè",
                        "Đáp án 2 nè",
                        "Đáp án 3 nè",
                        "Còn đây là 4"
                    ]
                },
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
            ],
            list_check: []
        }
    }
    submitResult=() =>{
        let vals = [];
        for (let i = 0; i < this.state.list.length; i++) {
            let ele=document.querySelector('input[name="option-' + i + '"]:checked');
            if(ele){
                vals.push(parseInt(ele.value));
            }else{
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
                            let awnser = object.awnser.map((item, subindex) => {
                                let block = "option-" + index;
                                let id = "option-" + index + "-" + subindex;
                                return (
                                    <li>
                                        <input value={subindex} type="radio" id={id} name={block} />
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

                <button onClick={this.submitResult} className="m-btn">Gửi kết quả</button>
            </div>
        );
    }
}
export default QuizPage;