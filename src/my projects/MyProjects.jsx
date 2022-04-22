import React from "react";
import style from "./MyProjects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../component/title/Title";
import social from "../assets/images/social_network.jpg"
import todo from "../assets/images/todolist.jpg"
import fight from "../assets/images/fight.png"
import {Fade} from 'react-awesome-reveal';

const socialImg = {
    backgroundImage: `url(${social})`
}

const todoImg = {
    backgroundImage: `url(${todo})`
}

const fightImg = {
    backgroundImage: `url(${fight})`
}

const descriptionMyProjects = [
    {
        title: "Social network",
        style: socialImg,
        link: "https://normanar.github.io/my-nett2",
        description: "React, Redux, Typescript - project"
    },
    {
        title: "Todolist",
        style: todoImg,
        link: "https://normanar.github.io/todolist",
        description: "React, Redux, Typescript, Material UI - project"
    },
    {
        title: "Fight game",
        style: fightImg,
        link: "https://fighting-club.netlify.app/",
        description: "JS, CSS, HTML, Canvas Graphics"
    },
]

export function MyProjects() {

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <Fade delay={500} direction={"left"}>
                <div className={style.projectsContainer}>
                    <Title text={"My projects"}/>
                    <div className={style.projects}>
                        {descriptionMyProjects.map(p => {
                            return <Project
                                title={p.title}
                                description={p.description}
                                style={p.style}
                                link={p.link}
                            />
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    )
}