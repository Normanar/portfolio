import React from "react";
import style from "./Skills.module.scss"
import {SkillOne} from "./skill/SkillOne";
import {Title} from "../component/title/Title";

const description = {
    react: "Ui layer",
    redux: "BLL layer",
    typeScript: "Programming language",
    js: "Programming language",
    css: "Cascading Style Sheets",
    html: "HyperText Markup Language",
}

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                {/*<h2 className={style.title}>Skills</h2>*/}
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <SkillOne title={'React'}
                              description={description.react}/>
                    <SkillOne title={'Redux'}
                              description={description.redux}/>
                    <SkillOne title={'TypeScript'}
                              description={description.typeScript}/>
                    <SkillOne title={'JavaScript'}
                              description={description.js}/>
                    <SkillOne title={'CSS'}
                              description={description.css}/>
                    <SkillOne title={'HTML'}
                              description={description.html}/>
                </div>
            </div>
        </div>
    )
}