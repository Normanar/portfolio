import React from "react";
import style from "./Project.module.css"


export function Project (props) {
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.button}>Watch</a>
            </div>
            <h5 className={style.projectTitle}>{props.title}</h5>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}