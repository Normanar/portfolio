import React from "react";
import style from "./Project.module.css"
import {TitleSection} from "../../component/titleSection/TitleSection";


export function Project (props) {
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.button}>Watch</a>
            </div>
            <TitleSection text={props.title}/>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}