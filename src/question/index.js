import React from "react";
import classes from "./question.module.css";

export const Question = (props) => (
    <div id="q-a" className={classes.question}>
        <div id="que"> {props.question} </div>&nbsp;=&nbsp;?
    </div>
);
