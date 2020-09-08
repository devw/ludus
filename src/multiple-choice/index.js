import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = ({ options, onClick }) => {
    const handleClick = (e) => onClick(e.target.innerHTML);
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
