import React from "react";
import style from "./SkillOne.module.css"

export function SkillOne(props) {
    return (
        <div className={style.skillOne}>
            <div className={style.icon}></div>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
        </div>
    )
}