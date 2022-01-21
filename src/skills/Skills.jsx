import React from "react";
import style from "./Skills.module.css"
import {SkillOne} from "./skill/SkillOne";

const description = {
    js: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    css: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    react: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
}

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <SkillOne title={'Js'}
                              description={description.js}/>
                    <SkillOne title={'Css'}
                              description={description.css}/>
                    <SkillOne title={'React'}
                              description={description.react}/>
                </div>
            </div>
        </div>
    )
}