import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = (props) => (
    <div className={classes.multipleChoice}>
        <div id="bar">{props.options}</div>
    </div>
);
