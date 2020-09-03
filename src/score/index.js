import React from "react";
import classes from "./score.module.css";

export const Score = (props) => {
    const { score } = props;
    const scoreStyle = {
        width: score,
        backgroundColor: parseInt(score) > 20 ? "green" : "red",
    };
    return (
        <div className={classes.score}>
            <div style={scoreStyle}>{props.score}</div>
        </div>
    );
};
