import React from "react";
import { Score } from "./score/";
import { Question } from "./question/";
import { MultipleChoice } from "./multiple-choice/";

function App() {
    const question = "3 + 2";
    const options = [5, 6, 7, 8];
    const handleClick = (response) => {
        console.log(response == eval(question));
    };
    return (
        <div className="App">
            <h1>Ludus</h1>
            <Question question={question}></Question>
            <MultipleChoice
                onClick={handleClick}
                options={options}
            ></MultipleChoice>
            <Score></Score>
        </div>
    );
}

export default App;
