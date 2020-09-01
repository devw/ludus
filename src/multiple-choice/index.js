import React from "react";
import classes from "./multiple-choice.module.css";

export const MultipleChoice = (props) => {
    const handleClick = function (e) {
        e.stopPropagation();
        props.onClick(e.target.innerHTML);
    };
    const options = props.options.map((e, i) => (
        <li key={i}>
            <div href="#" onClick={handleClick}>
                {e}
            </div>
        </li>
    ));

    return <ul className={classes.multipleChoice}>{options}</ul>;
};
