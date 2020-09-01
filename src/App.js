import React from "react";
import { Score } from "./score/";
import { Question } from "./question/";
import { MultipleChoice } from "./multiple-choice/";

function App() {
    return (
        <div className="App">
            <h1>Ludus</h1>
            <Question question="3 x 2"></Question>
            <MultipleChoice options={[5, 6, 7, 8]}></MultipleChoice>
            <Score></Score>
        </div>
    );
}

export default App;
