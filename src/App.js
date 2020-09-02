import React, { Component } from "react";
import { Score } from "./score/";
import { Question } from "./question/";
import { MultipleChoice } from "./multiple-choice/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "20%",
            question: "3 + 2",
            options: [5, 6, 7, 8],
        };
        this.checkResponse = (response) => {
            const { score, question } = this.state;
            response == eval(question)
                ? this.setState({ score: Math.min(parseInt(score) + 10) + "%" })
                : this.setState({ score: parseInt(score) - 10 + "%" });
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Ludus</h1>
                <Question question={this.state.question}></Question>
                <MultipleChoice
                    onClick={this.checkResponse}
                    options={this.state.options}
                ></MultipleChoice>
                <Score score={this.state.score}></Score>
            </div>
        );
    }
}

export default App;
