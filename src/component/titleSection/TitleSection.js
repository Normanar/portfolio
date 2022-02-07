import React from "react";
import style from "./TitleSection.module.css"

export function TitleSection(props) {
    return (
        <div>
            <h5 className={style.titleSection}>{props.text}</h5>
        </div>
    )
}