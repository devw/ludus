import React, { Component } from "react";
import { Score } from "./score/score";
import { Question } from "./question/question";
import { MultipleChoice } from "./multiple-choice/multiple-choise";
import { setQuestion, onReply } from "./services/handle-questions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "0%",
            onReply: onReply.bind(this),
        };
        this.setQuestion = setQuestion.bind(this);
    }

    componentDidMount = () => {
        this.setQuestion();
    };

    render = () => (
        <div className="App">
            <h1>Ludus</h1>
            <Question {...this.state}></Question>
            <MultipleChoice {...this.state}></MultipleChoice>
            <Score {...this.state}></Score>
        </div>
    );
}

export default App;
