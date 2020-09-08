import React from "react";
import classes from "./score.module.css";

export const Score = ({ score }) => {
    const scoreStyle = {
        width: score,
        backgroundColor: parseInt(score) > 20 ? "green" : "red",
    };
    return (
        <div className={classes.score}>
            <div style={scoreStyle}>{score}</div>
        </div>
    );
};
