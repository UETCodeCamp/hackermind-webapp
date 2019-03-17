import React, { Component } from 'react';
import alertText from '../dom.js';

class QuizPage extends Component {

    render() {
        return (
            <div id="quiz-content">
            <h4 className="quiz-name">Quiz: Bài tập đầu tiên</h4>
            <p className="result">Bạn đã hoàn thành trắc nghiệm với số điểm:
                <br/>
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
                <button className="m-btn">Gửi kết quả</button>
            </div>
        );
    }
}
export default QuizPage;