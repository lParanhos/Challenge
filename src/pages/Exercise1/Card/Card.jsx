import React from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import classes from "./Card.module.scss";

function Card({
    number,
    name,
    src,
    onClick
}) {
    return (
        <div className={classes.CardContainer}>
            <span>{number}</span>
            <span>{name}</span>
            <img src={src} alt="Pokemon"></img>
            <DeleteIcon className={classes.Remove} onClick={onClick}/>
        </div>
    );
}

export default Card;