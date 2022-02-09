import React from "react";
import style from "./SkillOne.module.scss"
import {TitleSection} from "../../component/titleSection/TitleSection";

export function SkillOne(props) {
    return (
        <div className={style.skillOne}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <TitleSection text={props.title}/>
            <span className={style.descriptionSkill}>{props.description}</span>
        </div>
    )
}