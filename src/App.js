import React, { Component } from "react";
import { Score } from "./score/";
import { Question } from "./question/";
import { MultipleChoice } from "./multiple-choice/";
import { setQuestion, onReply } from "./services/handle-questions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "0%",
        };
        this.setQuestion = setQuestion.bind(this);
        this.onReply = onReply.bind(this);
    }

    componentDidMount = () => {
        this.setQuestion();
    };

    render = () => (
        <div className="App">
            <h1>Ludus</h1>
            <Question question={this.state.question}></Question>
            <MultipleChoice
                onClick={this.onReply}
                options={this.state.options}
            ></MultipleChoice>
            <Score score={this.state.score}></Score>
        </div>
    );
}

export default App;
