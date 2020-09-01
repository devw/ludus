import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = (props) => {
    const options = props.options.map((e) => {
        return (
            <li key={e}>
                <input type="radio" name="choice" value={e} />
                <label htmlFor={e}>{e}</label>
            </li>
        );
    });
    return <ul className={classes.multipleChoice}>{options}</ul>;
};
