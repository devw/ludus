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
            <Question {...this.state}></Question>
            <MultipleChoice
                onClick={this.onReply}
                {...this.state}
            ></MultipleChoice>
            <Score {...this.state}></Score>
        </div>
    );
}

export default App;
