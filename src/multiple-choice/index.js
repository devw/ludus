import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = (props) => {
    const handleClick = function (e) {
        e.stopPropagation();
        props.onClick(e.target.innerHTML);
    };

    return (
        <ul className={classes.multipleChoice}>
            {props.options?.map((e, i) => (
                <li key={i} onClick={handleClick}>
                    {e}
                </li>
            ))}
        </ul>
    );
};
