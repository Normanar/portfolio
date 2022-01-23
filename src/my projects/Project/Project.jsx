import React from "react";
import style from "./Project.module.css"


export function Project (props) {
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer}>
                <a className={style.button}>Watch</a>
            </div>
            <span>{props.title}</span>
            <span>{props.description}</span>
        </div>
    )
}