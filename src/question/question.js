import React from "react";
import classes from "./question.module.css";

export const Question = ({ question }) => (
    <div id="q-a" className={classes.question}>
        <div id="que"> {question} </div>
        <div>&nbsp;=&nbsp;?</div>
    </div>
);
