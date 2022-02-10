import React from "react";
import style from "./Skills.module.scss"
import {SkillOne} from "./skill/SkillOne";
import {Title} from "../component/title/Title";
import {
    DiJavascript,
    GrReactjs,
    IoLogoCss3,
    SiRedux,
    SiTypescript,
    TiHtml5
} from "react-icons/all";
import {Fade} from 'react-awesome-reveal';

const sizeIcon = "100px"

const description = [
    {name: "react", about: "Ui layer", icon: <GrReactjs size={sizeIcon}/>},
    {name: "redux", about: "BLL layer", icon: <SiRedux size={sizeIcon}/>},
    {name: "typeScript", about: "Programming language", icon: <SiTypescript size={sizeIcon}/>},
    {name: "js", about: "Programming language", icon: <DiJavascript size={sizeIcon}/>},
    {name: "css", about: "Cascading Style Sheets", icon: <IoLogoCss3 size={sizeIcon}/>},
    {name: "html", about: "HyperText Markup Language", icon: <TiHtml5 size={sizeIcon}/>},

]

export function Skills() {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <Fade direction={"left"} delay={500}>
                <div className={style.skillsContainer}>
                    <Title text={"Skills"}/>
                    <div className={style.skills}>
                        {description.map(n => {
                            return <SkillOne title={n.name} description={n.about} icon={n.icon}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    )
}