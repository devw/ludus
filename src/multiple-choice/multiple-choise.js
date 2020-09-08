import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = ({ options, onClick, onReply }) => {
    const handleClick = (e) => onReply(e.target.innerHTML);
    return (
        <ul className={classes.multipleChoice}>
            {options?.map((e, i) => (
                <li key={i} onClick={handleClick}>
                    {e}
                </li>
            ))}
        </ul>
    );
};
